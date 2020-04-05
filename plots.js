
// var selected_month = d3.select('#selMonth').property("value");
// var selected_researcher = d3.select('#selName').property('value');
// // var selected_wk = d3.select('#selWeek').property('value');
// var selected_prod = d3.select('#selProd').property('value');

// function init(){
//     var trace_init = {
//         labels: [],
//         values: [],
//         type: "pie"
//     }

//     Plotly.newPlot("month_pie", [trace_init])
// }
// init()

function monthChanged(){
    var selected_month = d3.select('#selMonth').property('value');
    console.log(selected_month);
    return selected_month
        }

function nameChanged(){
    var selected_month = d3.select('#selMonth').property('value');
    var selected_researcher = d3.select('#selName').property('value');     
    // sel_projects()  
    d3.json('marAmber_byweek.json').then((data)=>{ 
        console.log(data.amber[4].MonthTotal);
        
        var proj_name = []
        var proj_hrs = []
        var wk_total = []
        
        if ((selected_month ==="march")&& (selected_researcher ==='amber')) {
            var selmonth = d3.select('#month_hours');
            selmonth.html("");
            selmonth.append("h4").text(data.amber[4].MonthTotal);
            
            d3.json('marProjects_combined.json').then((data) =>{
                var proj_title = data.amber
                console.log(proj_title[0])
            

            d3.json('marAmber_byprod.json').then((data) =>{
                proj_name = data.map(row => row.Product)
                proj_hrs = data.map(row =>row.Total);
                console.log(proj_name, proj_hrs)
                var trace_project = {
                    labels: proj_name,
                    values: proj_hrs,
                    type: "pie",
                    textinfo:"value"
                }
                var layout_byproj = {
                    title: "Monthly Total by Project"
                }
                Plotly.newPlot('month_pie', [trace_project],layout_byproj)
                console.log(proj_name, proj_hrs)

            });
            d3.json('marmonthtotalbyweek_combined.json').then((data)=>{
                wk_total = data.amber.map(row => row.Total);
                console.log(wk_total)
                var trace_weekly = {
                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                    values: wk_total,
                    type: "pie",
                    textinfo: "value"
                }
                var layout_weekly = {
                    title: "Monthly Total by Week"
                }
                Plotly.newPlot("month_bywk_pie", [trace_weekly], layout_weekly)
            });
            d3.json('marAmber_byphase.json').then((data)=>{
                var xlabels = []
                let proj1 = [];
                let proj2 = [];
                let proj3 = [];
                let proj4 = [];
                let proj5 = [];
                Object.keys(data[0]).forEach((val)=>
                    xlabels.push(val));
                    console.log(xlabels);
                Object.values(data[0]).forEach((val)=> proj1.push(val));
                    console.log(proj1);
                    var trace_proj1 = {
                        labels: xlabels,
                        values: proj1,
                        type: "pie",
                        textinfo: 'value'
                    };
                    var layout_proj1 = {
                        title: proj_title[0]
                    };
                    Plotly.newPlot('proj1_pie', [trace_proj1], layout_proj1);
    
                Object.values(data[1]).forEach((val)=> proj2.push(val));

                    var trace_proj2 = {
                        labels: xlabels,
                        values: proj2,
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj2 = {
                        title: proj_title[1]
                    };
                    Plotly.newPlot('proj2_pie', [trace_proj2], layout_proj2);

                Object.values(data[2]).forEach((val)=> proj3.push(val));
 
                    var trace_proj3 = {
                        labels: xlabels,
                        values: proj3,
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj3 = {
                        title: proj_title[2]
                    };
                    Plotly.newPlot('proj3_pie', [trace_proj3],layout_proj3);
                Object.values(data[3]).forEach((val)=> proj4.push(val));
                var trace_proj4 = {
                    labels: xlabels,
                    values: proj4,
                    type: "pie",
                    textinfo: 'value'
                };
                var layout_proj4 = {
                    title: proj_title[3]
                };
                Plotly.newPlot('proj4_pie', [trace_proj4], layout_proj4);
                Object.values(data[4]).forEach((val)=> proj5.push(val));
                    var trace_proj5 = {
                        labels: xlabels,
                        values: proj5,
                        type: "pie",
                        textinfo: 'value'
                    }
                var layout_proj5 = {
                    title: proj_title[4]
                };
                    Plotly.newPlot('proj5_pie', [trace_proj5], layout_proj5);
                });
            });
        }
   
        if ((selected_month ==="march")&& (selected_researcher ==='gwen')) {
            var selmonth = d3.select('#month_hours');
            selmonth.html("");
            selmonth.append("h4").text(data.gwen[4].MonthTotal);
            
            d3.json('marProjects_combined.json').then((data) =>{
                var proj_title = data.gwen
                console.log(proj_title[0])
            
            d3.json('marGwen_byprod.json').then((data) =>{
                proj_name = data.map(row => row.Product)
                proj_hrs = data.map(row =>row.Total);
                console.log(proj_name, proj_hrs)
                var trace_project = {
                    labels: proj_name,
                    values: proj_hrs,
                    type: "pie",
                    textinfo:"value"
                }
                var layout_byproj = {
                    title: "Monthly Total by Project"
                }
                Plotly.newPlot('month_pie', [trace_project], layout_byproj)
                console.log(proj_name, proj_hrs)
            })
            d3.json('marmonthtotalbyweek_combined.json').then((data)=>{
                wk_total = data.gwen.map(row => row.Total);
                console.log(wk_total)
                var trace_weekly = {
                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                    values: wk_total,
                    type: "pie",
                    textinfo: "value"
                }
                var layout_weekly = {
                    title: "Monthly Total by Week"
                }
                Plotly.newPlot("month_bywk_pie", [trace_weekly],layout_weekly)
            })
            d3.json('marGwen_byphase.json').then((data)=>{
                var xlabels = []
                let proj1 = [];
                let proj2 = [];
                let proj3 = [];
                let proj4 = [];
                let proj5 = [];
                Object.keys(data[0]).forEach((val)=>
                    xlabels.push(val));
                    console.log(xlabels);
                Object.values(data[0]).forEach((val)=> proj1.push(val));
                    console.log(proj1);
                    var trace_proj1 = {
                        labels: xlabels,
                        values: proj1,
                        type: "pie",
                        textinfo: 'value'
                    };
                    var layout_proj1 = {
                        title: proj_title[0]
                    };
                    Plotly.newPlot('proj1_pie', [trace_proj1], layout_proj1);
    
                Object.values(data[1]).forEach((val)=> proj2.push(val));

                    var trace_proj2 = {
                        labels: xlabels,
                        values: proj2,
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj2 = {
                        title: proj_title[1]
                    };
                    Plotly.newPlot('proj2_pie', [trace_proj2], layout_proj2);

                Object.values(data[2]).forEach((val)=> proj3.push(val));
 
                    var trace_proj3 = {
                        labels: xlabels,
                        values: proj3,
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj3 = {
                        title: proj_title[2]
                    };
                    Plotly.newPlot('proj3_pie', [trace_proj3],layout_proj3);

                Object.values(data[3]).forEach((val)=> proj4.push(val));
                var trace_proj4 = {
                    labels: xlabels,
                    values: proj4,
                    type: "pie",
                    textinfo: 'value'
                };
                var layout_proj4 = {
                    title: proj_title[3]
                };
                Plotly.newPlot('proj4_pie', [trace_proj4], layout_proj4);

                Object.values(data[4]).forEach((val)=> proj5.push(val));
                    var trace_proj5 = {
                        labels: xlabels,
                        values: proj5,
                        type: "pie",
                        textinfo: 'value'
                    }
                var layout_proj5 = {
                    title: proj_title[4]
                };
                    Plotly.newPlot('proj5_pie', [trace_proj5], layout_proj5);
                });
            });
    }

        if ((selected_month ==="march")&& (selected_researcher ==='pitia')) {
            var selmonth = d3.select('#month_hours');
            selmonth.html("");
            selmonth.append("h4").text(data.pitia[4].MonthTotal);
            
            d3.json('marProjects_combined.json').then((data) =>{
                var proj_title = data.pitia
                console.log(proj_title[0])
            
            d3.json('marPitia_byprod.json').then((data) =>{
                proj_name = data.map(row => row.Product)
                proj_hrs = data.map(row =>row.Total);
                console.log(proj_name, proj_hrs);
                var trace_project = {
                    labels: proj_name,
                    values: proj_hrs,
                    type: "pie",
                    textinfo:"value"
                }
                var layout_byproj = {
                    title: "Monthly Total by Project"
                }
                Plotly.newPlot('month_pie', [trace_project], layout_byproj)
                console.log(proj_name, proj_hrs)
            })
            d3.json('marmonthtotalbyweek_combined.json').then((data)=>{
                wk_total = data.pitia.map(row => row.Total);
                console.log(wk_total)
                var trace_weekly = {
                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                    values: wk_total,
                    type: "pie",
                    textinfo: "value"
                }
                var layout_weekly = {
                    title: "Monthly Total by Week"
                }
                Plotly.newPlot("month_bywk_pie", [trace_weekly], layout_weekly)
            });
            d3.json('marPitia_byphase.json').then((data)=>{
                var xlabels = []
                let proj1 = [];
                let proj2 = [];
                let proj3 = [];
                // let proj4 = [];
                // let proj5 = [];
                Object.keys(data[0]).forEach((val)=>
                    xlabels.push(val));
                    console.log(xlabels);

                Object.values(data[0]).forEach((val)=> proj1.push(val));
                    console.log(proj1);
                    var trace_proj1 = {
                        labels: xlabels,
                        values: proj1,
                        type: "pie",
                        textinfo: 'value'
                    };
                    var layout_proj1 = {
                        title: proj_title[0]
                    };
                    Plotly.newPlot('proj1_pie', [trace_proj1], layout_proj1);
    
                Object.values(data[1]).forEach((val)=> proj2.push(val));

                    var trace_proj2 = {
                        labels: xlabels,
                        values: proj2,
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj2 = {
                        title: proj_title[1]
                    };
                    Plotly.newPlot('proj2_pie', [trace_proj2], layout_proj2);

                Object.values(data[2]).forEach((val)=> proj3.push(val));
 
                    var trace_proj3 = {
                        labels: xlabels,
                        values: proj3,
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj3 = {
                        title: proj_title[2]
                    };
                    Plotly.newPlot('proj3_pie', [trace_proj3],layout_proj3);
                    var trace_proj4 = {
                        labels: [],
                        values: [],
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj4 = {
                        title: []
                    };
                    Plotly.newPlot('proj4_pie', [trace_proj4],layout_proj4);
                    var trace_proj5 = {
                        labels: [],
                        values: [],
                        type: "pie",
                        textinfo: 'value'
                    }
                    var layout_proj5 = {
                        title: []
                    };
                    Plotly.newPlot('proj5_pie', [trace_proj5],layout_proj5);


            });
        });
    }
})
}


function weekChanged(){
    // let week_name = nameChanged();
    var selected_wk = d3.select('#selWeek').property('value');
    var selected_researcher = d3.select('#selName').property('value');    
    
    d3.json('mar_byweek_combined.json').then((data)=>{
        let wklabels = [];
        Object.keys(data.amber[0]).forEach((val)=> wklabels.push(val));
        console.log(wklabels);
        let wk1 = [];
        let wk2 = [];
        let wk3 = [];
        let wk4 = [];

        if ((selected_wk ==='wk1')&& (selected_researcher ==="amber")){
            Object.values(data.amber[0]).forEach((val)=> wk1.push(val));
            
            var trace_wk1 = {
                labels: wklabels,
                values: wk1,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk1 = {
                title: "Week 1 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk1], layout_wk1)
        } 
        if ((selected_wk==="wk2")&&(selected_researcher ==='amber')){
            Object.values(data.amber[1]).forEach((val)=> wk2.push(val));
            var trace_wk2 = {
                labels: wklabels,
                values: wk2,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk2 = {
                title: "Week 2 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk2], layout_wk2)
        }
        if ((selected_wk==="wk3")&&(selected_researcher ==='amber')){
            Object.values(data.amber[2]).forEach((val)=> wk3.push(val));
            var trace_wk3 = {
                labels: wklabels,
                values: wk3,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk3 = {
                title: "Week 3 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk3], layout_wk3)
        }
        if ((selected_wk==="wk4")&&(selected_researcher ==='amber')){
            Object.values(data.amber[3]).forEach((val)=> wk4.push(val));
            var trace_wk4 = {
                labels: wklabels,
                values: wk4,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk4 = {
                title: "Week 4 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk4], layout_wk4)
        }
        if ((selected_wk ==='wk1')&& (selected_researcher ==="gwen")){
            Object.values(data.gwen[0]).forEach((val)=> wk1.push(val));
            
            var trace_wk1 = {
                labels: wklabels,
                values: wk1,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk1 = {
                title: "Week 1 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk1], layout_wk1)
        } 
        if ((selected_wk==="wk2")&&(selected_researcher ==='gwen')){
            Object.values(data.gwen[1]).forEach((val)=> wk2.push(val));
            var trace_wk2 = {
                labels: wklabels,
                values: wk2,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk2 = {
                title: "Week 2 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk2], layout_wk2)
        }
        if ((selected_wk==="wk3")&&(selected_researcher ==='gwen')){
            Object.values(data.gwen[2]).forEach((val)=> wk3.push(val));
            var trace_wk3 = {
                labels: wklabels,
                values: wk3,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk3 = {
                title: "Week 3 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk3], layout_wk3)
            console.log(wk3)
        }
        if ((selected_wk==="wk4")&&(selected_researcher ==='gwen')){
            Object.values(data.gwen[3]).forEach((val)=> wk4.push(val));
            var trace_wk4 = {
                labels: wklabels,
                values: wk4,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk4 = {
                title: "Week 4 Summary"
               
            }
            Plotly.newPlot('weekly_pie',[trace_wk4], layout_wk4)
            console.log(wk4)
        }
        if ((selected_wk ==='wk1')&& (selected_researcher ==="pitia")){
            Object.values(data.pitia[0]).forEach((val)=> wk1.push(val));
            
            var trace_wk1 = {
                labels: wklabels,
                values: wk1,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk1 = {
                title: "Week 1 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk1], layout_wk1)
        } 
        if ((selected_wk==="wk2")&&(selected_researcher ==='pitia')){
            Object.values(data.pitia[1]).forEach((val)=> wk2.push(val));
            var trace_wk2 = {
                labels: wklabels,
                values: wk2,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk2 = {
                title: "Week 2 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk2], layout_wk2)
        }
        if ((selected_wk==="wk3")&&(selected_researcher ==='pitia')){
            Object.values(data.pitia[2]).forEach((val)=> wk3.push(val));
            var trace_wk3 = {
                labels: wklabels,
                values: wk3,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk3 = {
                title: "Week 3 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk3], layout_wk3)
        }
        if ((selected_wk==="wk4")&&(selected_researcher ==='pitia')){
            Object.values(data.pitia[3]).forEach((val)=> wk4.push(val));
            var trace_wk4 = {
                labels: wklabels,
                values: wk4,
                type: "pie",
                textinfo: "value"
            }
            var layout_wk4 = {
                title: "Week 4 Summary"
            }
            Plotly.newPlot('weekly_pie',[trace_wk4], layout_wk4)
        }
       
    })
}

// function sel_projects(){

//     var selector = d3.select("#selProd");
//     var selected_month = d3.select('#selMonth').property("value");
//     var selected_researcher = d3.select('#selName').property('value');
//     var proj = []
//     d3.json("marProjects_combined.json").then((data)=>{
//         console.log(data)
//     if (selected_month==="march" && selected_researcher === 'amber'){ 

//         console.log("sel_projects amber success")
//             console.log(data.amber);
//             proj = data.amber
//             proj.forEach((sample)=>{
//                 selector
//                 // .append("null")
//                 .append('option')
//                 .text(sample)
//                 .property('value', sample)})}
                
    // if (selected_month==="march" && selected_researcher === 'gwen'){ 
    //     console.log("sel_projects gwen success")
    //         console.log(data.gwen);
    //         proj = data.gwen
    //         proj.forEach((sample)=>{
    //             selector
    //             .append('option')
    //             .text(sample)
    //             .property('value', sample)})}
    // if (selected_month==="march" && selected_researcher === 'pitia'){ 
    //     selector.empty("option");
    //     console.log("sel_projects pitia success")
    //         console.log(data.pitia)
    //         proj = data.pitia
    //         proj.forEach((sample)=>{
    //             selector
    //             .append('option')
    //             .text(sample)
    //             .property('value', sample)})};
            
    //         })   
    //     }

// function prodChanged(){
//     var selprod = d3.selectAll('#selProd'); 
//     selected_prod = selprod.property("value");
//     console.log(selected_prod)
//     
                    
//         })       

//     })
// }
