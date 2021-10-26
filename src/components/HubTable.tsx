import { subclass, property } from "@arcgis/core/core/accessorSupport/decorators";
import Widget from "@arcgis/core/widgets/Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import HubTableViewModel from "./HubTableViewModel";
import FieldColumnConfig from "@arcgis/core/widgets/FeatureTable/FieldColumnConfig";
import { CSS } from '../resources';

import esri = __esri;

export interface HubTableProps extends esri.WidgetProperties {
    url: string,
    table: string,
    region: string,
    fieldConfigs: Array<FieldColumnConfig>
}

@subclass("app.HubTable")
class HubTable extends Widget {

    @property() viewModel: HubTableViewModel;

    fieldConfigs: Array<FieldColumnConfig>;

    constructor(props: HubTableProps) {
        super(props)

        this.fieldConfigs = props.fieldConfigs;

        this.viewModel = new HubTableViewModel({
            featureLayerUrl: props.url,
            tableVersion: props.table,
            region: props.region
        });
    }

    render() {
        const content = (
            <div>
                <calcite-button 
                    icon-start="download" 
                    afterCreate={this._addDownloadListener}
                    bind={this}
                    class={this.classes(CSS.calciteStyles.padLeaderHalf)}
                    >
                        Download List
                    </calcite-button>
                    <div class={this.classes(CSS.calciteStyles.padLeader, CSS.tablePanel)} bind={this} afterCreate={this._renderFeatureTable}></div>
            </div>
 
        )

        return <div>{content}</div>
    }

    private _renderFeatureTable(node: HTMLElement) {
        if (node instanceof HTMLElement) {
            const featureTable = new FeatureTable({
                layer: this.viewModel.featureLayer,
                visibleElements: {
                    header: false,
                    selectionColumn: false
                },
                fieldConfigs: this.fieldConfigs,
                editingEnabled: false,
                container: node
            })
        }
    }

    private _addDownloadListener(node: HTMLElement): void {
        node.addEventListener('click', () => {
            this.viewModel.exportPDF()
        })
    }
}

export default HubTable;