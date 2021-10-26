import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { SWRP_FIELDS, IRWM_FIELDS } from "../resources";
import { jsPDF } from 'jspdf';
import { applyPlugin } from 'jspdf-autotable';
applyPlugin(jsPDF);

import esri = __esri;

export interface HubTableViewModelProps extends esri.WidgetProperties {
    featureLayerUrl: string
    tableVersion: string
    region: string
}

@subclass('app.HubTableViewModel')
class HubTableViewModel extends Accessor {

    @property()
    featureLayer: FeatureLayer

    @property()
    tableVersion: string = null;

    @property()
    region: string = null

    constructor(props?: HubTableViewModelProps) {
        super(props);

        this.featureLayer = new FeatureLayer({
            url: props.featureLayerUrl,
            definitionExpression: this.tableVersion === 'SWRP' ? null : "GrantRound = 'TO BE DETERMINED'"
        });
        console.log('viewmodel construct', this.featureLayer)
        this.tableVersion = props.tableVersion;
        this.region = props.region;
    }

    exportPDF() {
        this.tableVersion === 'SWRP' ? this.exportSWRPPDF() : this.exportIRWMPDF();
    }

    exportIRWMPDF() {
        let totalCost = 0;
        const query = this.featureLayer.createQuery();
        query.returnGeometry = false;
        query.outFields = Object.keys(IRWM_FIELDS)

        this.featureLayer.queryFeatures(query).then((response) => {
            let doc = new jsPDF('l');
            let pdf_body = new Array;

            const pdf_head = [{
                ProjectName: "Project Name",
                IRWMProjectRankingScore: 'Prioritization Score',
                ProjectStatus: "Project Status",
                EstimatedTotalProjectCost: "Project Cost ($)",
                ExpectedCompletionDate: "Expected Completion Date",
                PrimaryProjectIRWMGoal: "Primary IRWM Goal",
                ProjectDescription: "Description",
                AgencyName: "Agency"
            }]

            Object.keys(response.features).map((key: string) => {
                pdf_body.push(
                    {
                        ProjectName: response.features[key].attributes["ProjectName"],
                        IRWMProjectRankingScore: response.features[key].attributes["IRWMProjectRankingScore"],
                        ProjectStatus: response.features[key].attributes["ProjectStatus"],
                        EstimatedTotalProjectCost: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.features[key].attributes["EstimatedTotalProjectCost"]),
                        ExpectedCompletionDate: response.features[key].attributes["ExpectedCompletionDate"],
                        PrimaryProjectIRWMGoal: response.features[key].attributes["PrimaryProjectIRWMGoal"],
                        ProjectDescription: response.features[key].attributes["ProjectDescription"],
                        AgencyName: response.features[key].attributes["AgencyName"]
                    }
                )

                totalCost = totalCost + response.features[key].attributes["EstimatedTotalProjectCost"]

            });

            pdf_body.push({
                ProjectName: 'Total Cost of Projects',
                EstimatedTotalProjectCost: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalCost)
            })

            console.log(pdf_body)

            const date = 'Orange County IRWM Project List, exported on ' + new Date(Number(new Date())).toLocaleString();
            doc.text(date, 14, 20);
            //@ts-ignore
            doc.autoTable({
                head: pdf_head,
                body: pdf_body,
                // foot: pdf_footer,
                startY: 25,
                rowPageBreak: 'auto',
                bodyStyles: {valign: 'top'},
                styles: { cellPadding: 0.5, fontSize: 8 },
                columns: [
                    {header: 'Project Name', dataKey: 'ProjectName'},
                    {header: 'Prioritization Score', dataKey: 'IRWMProjectRankingScore'},
                    {header: 'Project Status', dataKey: 'ProjectStatus'},
                    {header: 'Total Project Cost ($)', dataKey: 'EstimatedTotalProjectCost'},
                    {header: 'Expected Completion Date', dataKey: 'ExpectedCompletionDate'},
                    {header: 'Primary IRWM Goal', dataKey: 'PrimaryProjectIRWMGoal'},
                    {header: 'Description', dataKey: 'ProjectDescription'},
                    {header: 'Agency Name', dataKey: 'AgencyName'},
                ],
                didParseCell: function (data: any) {
                    var rows = data.table.body;
                    if (data.row.index === rows.length - 1) {
                        data.cell.styles.fillColor = [239, 154, 154];
                    }
                }
            })
            // doc.autoTable({ html: '#tableDiv' })
            doc.save('IRWM_Project_List.pdf')
        })
    }

    exportSWRPPDF() {
        let totalCost = 0;
        const query = this.featureLayer.createQuery();
        query.returnGeometry = false;
        query.outFields = Object.keys(SWRP_FIELDS)
        // console.log(query);

        this.featureLayer.queryFeatures(query).then((response) => {
            let doc = new jsPDF('l');
            let pdf_body = new Array;

            const pdf_head = [{
                ProjectName: 'Project Name',
                SWRPProjectScore: 'Prioritization Score',
                ProjectStatus: 'Project Status',
                EstimatedTotalProjectCost: 'Project Cost ($)',
                ExpectedCompletionDate: 'Expected Completion Date',
                PrimaryBenefit: 'Primary Benefit',
                PrimaryBenefitQuantity: 'Value',
                PrimaryBenefitUnits: 'Units for Primary Benefit',
                SecondaryBenefit: 'Secondary Benefit',
                SecondaryBenefitQuantity: 'Value',
                SecondaryBenefitUnits: 'Units for Secondary Benefit',
                AdditionalBenefit: 'Other Benefit',
                AdditionalBenefitQuantity: 'Value',
                AdditionalBenefitUnits: 'Units for Other Benefit',
                UseOfPublicLands: 'Use of Public Lands'
            }]

            Object.keys(response.features).map((key: string) => {
                pdf_body.push(
                    {
                        ProjectName: response.features[key].attributes["ProjectName"],
                        SWRPProjectScore: response.features[key].attributes["SWRPProjectScore"],
                        ProjectStatus: response.features[key].attributes["ProjectStatus"],
                        EstimatedTotalProjectCost: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.features[key].attributes["EstimatedTotalProjectCost"]),
                        ExpectedCompletionDate: response.features[key].attributes["ExpectedCompletionDate"],
                        PrimaryBenefit: response.features[key].attributes["PrimaryBenefit"],
                        PrimaryBenefitQuantity: response.features[key].attributes["PrimaryBenefitQuantity"],
                        PrimaryBenefitUnits: response.features[key].attributes["PrimaryBenefitUnits"],
                        SecondaryBenefit: response.features[key].attributes["SecondaryBenefit"],
                        SecondaryBenefitQuantity: response.features[key].attributes["SecondaryBenefitQuantity"],
                        SecondaryBenefitUnits: response.features[key].attributes["SecondaryBenefitUnits"],
                        AdditionalBenefit: response.features[key].attributes["AdditionalBenefit"],
                        AdditionalBenefitQuantity: response.features[key].attributes["AdditionalBenefitQuantity"],
                        AdditionalBenefitUnits: response.features[key].attributes["AdditionalBenefitUnits"],
                        UseOfPublicLands: response.features[key].attributes["UseOfPublicLands"]
                    }
                )

                totalCost = totalCost + response.features[key].attributes["EstimatedTotalProjectCost"]

            });

            pdf_body.push({
                ProjectName: 'Total Cost of Projects',
                EstimatedTotalProjectCost: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalCost)
            })

            console.log(pdf_body)

            const date = 'Orange County SWRP Project List, exported on ' + new Date(Number(new Date())).toLocaleString();
            doc.text(date, 14, 20);
            //@ts-ignore
            doc.autoTable({
                head: pdf_head,
                body: pdf_body,
                // foot: pdf_footer,
                startY: 25,
                rowPageBreak: 'auto',
                bodyStyles: {valign: 'top'},
                styles: { cellPadding: 0.5, fontSize: 8 },
                columns: [
                    {header: 'Project Name', dataKey: 'ProjectName'},
                    {header: 'Prioritization Score', dataKey: 'SWRPProjectScore'},
                    {header: 'Total Project Cost ($)', dataKey: 'EstimatedTotalProjectCost'},
                    {header: 'Expected Completion Date', dataKey: 'ExpectedCompletionDate'},
                    {header: 'Primary Benefit', dataKey: 'PrimaryBenefit '},
                    {header: 'Value', dataKey: 'PrimaryBenefitQuantity'},
                    {header: 'Units for Primary Benefit', dataKey: 'PrimaryBenefitUnits'},
                    {header: 'Secondary Benefit', dataKey: 'SecondaryBenefit'},
                    {header: 'Value', dataKey: 'SecondaryBenefitQuantity'},
                    {header: 'Units for Secondary Benefit', dataKey: 'SecondaryBenefitUnits'},
                    {header: 'Other Benefit', dataKey: 'AdditionalBenefit'},
                    {header: 'Value', dataKey: 'AdditionalBenefitQuantity'},
                    {header: 'Units for Other Benefit', dataKey: 'AdditionalBenefitUnits'},
                    {header: 'Use of Public Lands', dataKey: 'UseOfPublicLands'}
                ],
                didParseCell: function (data: any) {
                    var rows = data.table.body;
                    if (data.row.index === rows.length - 1) {
                        data.cell.styles.fillColor = [239, 154, 154];
                    }
                }
            })
            // doc.autoTable({ html: '#tableDiv' })
            doc.save('SWRP_Project_List.pdf')
        })
    }
}

export default HubTableViewModel;