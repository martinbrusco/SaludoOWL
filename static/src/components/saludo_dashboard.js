/**@odoo-module */

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
const { Component, useState, onWillStart } = owl;

export class OwlSaludosDashboard extends Component {
    setup() {
        this.state = useState({
            title: "",
        });

        onWillStart(async () => {
            console.log("onWillStart");
            this.state.title = "Saludos Dashboard";
            console.log("this.state.title", this.state.title);
        });
    }
}

OwlSaludosDashboard.template = "owl.SaludosDashboard";
registry.category("actions").add("owl.saludo_dashboard", OwlSaludosDashboard);


