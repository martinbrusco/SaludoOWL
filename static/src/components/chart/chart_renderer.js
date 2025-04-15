/** @odoo-module **/

import { loadJS } from "@web/core/assets";
const { Component, useState, onWillStart, useRef, onMounted } = owl;

export class OwlChartRenderer extends Component {

    setup() {
        this.chartRef= useRef('chart') 
        this.state= useState({
            title: "Modules",
        });
        onWillStart(async () => {
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js");
        })
        onMounted(() =>{
            
            console.log("ChatMount" );
            this.render(this.state.title);
        });
    }

    render(title){
        const Chart = window.Chart;  // Esto es necesario cuando usás Chart.js vía CDN
        new Chart(this.chartRef.el, {
            type:'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets:[{
                    label:title,
                    data:[12, 19, 3]
                }]
            }
        });
    }
    




}

OwlChartRenderer.template= 'owl.OwlChartRenderer';