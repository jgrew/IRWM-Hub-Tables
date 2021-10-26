import HubTable from '../components/HubTable';
import FieldColumnConfig from "@arcgis/core/widgets/FeatureTable/FieldColumnConfig";
import { OPTIONS, SWRP_FIELDS, IRWM_FIELDS } from "../resources";

import esri = __esri;

class IRWMTableApp {

    hubTable: HubTable = null;
    table: string = null;
    url: string = null;
    fieldConfigs: Array<FieldColumnConfig> = null;
    region: string = null;

    public init(): void {

        this.getUrlParameters();
        
        const IRWM_URL = this.region === 'south' ? OPTIONS.SIRWM_URL : OPTIONS.NCIRWM_URL;
        this.url = this.table === 'SWRP' ? OPTIONS.SWRP_URL : IRWM_URL;

        this.fieldConfigs = this.createFieldConfigs()
        console.log(this.fieldConfigs);
        this.hubTable = new HubTable({
            url: this.url,
            table: this.table,
            region: this.region,
            fieldConfigs: this.fieldConfigs,
            container: 'tablePanel'
        });
    }

    getUrlParameters(): void {
        const urlParameters = new URLSearchParams(window.location.search);
        this.table = urlParameters.get("table");
        this.region = urlParameters.get("region");
    }

    createFieldConfigs(): Array<FieldColumnConfig> {

        const FIELDS = this.table === 'SWRP' ? SWRP_FIELDS : IRWM_FIELDS;
        const fieldConfigs = Object.keys(FIELDS).map((key: string) => {
            const fieldConfig = new FieldColumnConfig({
                name: key,
                label: FIELDS[key],
                editable: false,
                visible: key === "OBJECTID" ? false : true,
                direction: key == "ProjectName" ? "asc": null
            })
            return fieldConfig
        })

        return fieldConfigs
    }
}
    
export = IRWMTableApp;
