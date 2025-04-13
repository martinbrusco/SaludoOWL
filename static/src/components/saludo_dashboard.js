/** @odoo-module */

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
const { Component, useState, onWillStart } = owl;

export class OwlSaludosDashboard extends Component {
    setup() {
        this.state = useState({
            title: "",
            information: [],
            countModule: [],
        });

        this.orm = useService("orm");

        onWillStart(async () => {
            console.log("onWillStart");
            this.state.title = "Saludos Dashboard";
            this.state.information = await this.getModuleInformation();
            this.state.countModule = await this.getModuleCount();
        });
    }

    async getModuleInformation() {
        try {
            const information = await this.orm.searchRead(
                "ir.module.module",
                [["name", "=", "saludos"]],
                ["id", "author", "description", "shortdesc", "website", "summary"]
            );
            return information;
        } catch (error) {
            console.error("Error fetching module information:", error);
            return [];
        }
    }

    async getModuleCount() {
        try {
            const count = await this.orm.readGroup(
                "ir.module.module",
                [[]],
                ["state"],
                ["state"],
            );
            return count;
        } catch (error) {
            console.error("Error fetching module information:", error);
            return [];
        }
    }
}

OwlSaludosDashboard.template = "owl.SaludosDashboard";
registry.category("actions").add("owl.saludo_dashboard", OwlSaludosDashboard);


