        $(document).ready(function() {
            function draw() {

                var width = $(".chartDivs1").width();
                var height = $(".chartDivs1").height()


                var data = [{
                    country: "myHouse",
                    growth: 45
                }, {
                    country: "Moon",
                    growth: 40
                }, {
                    country: "India",
                    growth: 35
                }, {
                    country: "Indonesia",
                    growth: 30
                }, {
                    country: "Russia",
                    growth: 25
                }, {
                    country: "Mars",
                    growth: 20
                }, {
                    country: "Pluton",
                    growth: 15
                }, {
                    country: "Earth",
                    growth: 10
                }, {
                    country: "Neptune",
                    growth: 5
                }];

                //set margins
                var margin = {
                    top: 20,
                    right: 30,
                    bottom: 30,
                    left: 40
                };
                var width = width - margin.left - margin.right * 2.5;
                var height = height - margin.top - margin.bottom;

                //set scales & ranges

                var xScale = d3.scaleLinear()
                    .range([0, width * 1.1])

                var yScale = d3.scaleBand()
                    .range([30, height]).padding(.3)

                //draw the svg

                var svg = d3.select(".chartDivs1")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right * 3)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left * 1.4 + "," + margin.top + ")")

                //Add a Title
                svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 11)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("text-decoration", "underline")
                    .text("Title");

                //force data

                data.forEach(function(d) {
                    return d.growth = +d.growth;
                });

                //set domains

                yScale.domain(data.map(d => d.country))

                xScale.domain([0, d3.max(data, d => d.growth)])

                //add X & Y axes and append the bars to Y axis

                var xAxis = svg.append("g")
                    .attr("class", xAxis)
                    .attr("transform", "translate(" + 0 + "," + height + ")")
                    .call(d3.axisBottom(xScale))

                var yAxis = svg.append("g")
                    .attr("class", yAxis)
                    .call(d3.axisLeft(yScale))
                    .selectAll("rect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("stroke", "transparent")
                    .attr("stroke-width", 4)
                    .attr("class", "bar")
                    .attr("height", yScale.bandwidth())
                    .attr("x", 0.5)
                    .attr("y", function(d) {
                        return yScale(d.country)
                    })
                    .attr("width", 0)
                    .transition()
                    .duration(3800)
                    .delay((d, i) => (i + 1) * 200)
                    .ease(d3.easeElastic)
                    .attr("width", function(d) {
                        return xScale(d.growth)
                    })
                    .style("fill", "#00338D")
                    .on('end', function() {
                        d3.select(this)
                            .on("mouseover", function() {
                                d3.select(this)
                                    .transition().duration(600)
                                    .attr("stroke", "#6D2077")
                                    .attr("stroke-width", 3)
                                    .style("fill", "#6D2077")
                                d3.selectAll(".textCircle")
                                    .transition().duration(600)
                                    .attr("r", yScale.bandwidth() / 1.9)
                                    .attr("stroke", "#6D2077")
                                    .attr("stroke-width", 1)
                            })
                            .on("mouseout", function() {
                                d3.select(this)
                                    .transition()
                                    .duration(600)
                                    .attr("stroke", "transparent")
                                    .attr("stroke-width", 0)
                                    .style("fill", "#00338D")
                                d3.selectAll(".textCircle")
                                    .transition().duration(600)
                                    .attr("r", yScale.bandwidth() / 2)
                                    .attr("stroke", "transparent")

                            })

                    })

                var newG = svg.append("g")

                newG.selectAll("circle")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("class", "textCircle")
                    .attr("cx", d => xScale(d.growth))
                    .attr("cy", d => yScale(d.country) + yScale.bandwidth() / 2)
                    .attr("r", 0)
                    .transition()
                    .duration(1200)
                    .delay((d, i) => (i + 1) * 450)
                    .attr("r", yScale.bandwidth() / 2)
                    .attr("opacity", 1)
                    .style("fill", "#005EB8")
                    .attr("stroke", "transparent")
                    .ease(d3.easeElastic)



                var newG4text = svg.append("g").attr("class", "newG4text")

                newG4text.selectAll(".text").data(data)
                    .enter()
                    .append("text")
                    .attr("x", d => xScale(d.growth))
                    .attr("y", d => yScale(d.country) + yScale.bandwidth() / 2)
                    .attr("dx", "-.45em")
                    .attr("dy", ".4em")
                    .style("font-size", ".8em")
                    .style("fill", "#FFF")
                    .text(d => d.growth).on("end", draw2());



            }

            /*====================================FUNCTION FOR THE SECOND COL=====================================*/

            function draw2() {

                var width = $(".chartDivs2").width();
                var height = $(".chartDivs2").height();


                var data = [{
                    country: "china",
                    growth: 35
                }, {
                    country: "Russia",
                    growth: 30
                }, {
                    country: "Iran",
                    growth: 25
                }, {
                    country: "Japan",
                    growth: 20
                }, {
                    country: "Chile",
                    growth: 15
                }, {
                    country: "USA",
                    growth: 20
                }, {
                    country: "UK",
                    growth: 25
                }, {
                    country: "France",
                    growth: 30
                }, {
                    country: "Austria",
                    growth: 35
                }];

                //set margins
                var margin = {
                    top: 20,
                    right: 30,
                    bottom: 30,
                    left: 40
                };
                var width = width - margin.left - margin.right * 2.5;
                var height = height - margin.top - margin.bottom;

                //set scales & ranges

                var xScale = d3.scaleLinear()
                    .range([0, width * 1.1])

                var yScale = d3.scaleBand()
                    .range([30, height]).padding(.3)

                //draw the svg

                var svg = d3.select(".chartDivs2")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right * 3)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left * 1.4 + "," + margin.top + ")")

                //Add a Title
                svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 11)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("text-decoration", "underline")
                    .text("Another Title");

                //force data

                data.forEach(function(d) {
                    return d.growth = +d.growth;
                });

                //set domains

                yScale.domain(data.map(d => d.country))

                xScale.domain([0, d3.max(data, d => d.growth)])

                //add X & Y axes and append the bars to Y axis

                var xAxis = svg.append("g")
                    .attr("class", xAxis)
                    .attr("transform", "translate(" + 0 + "," + height + ")")
                    .call(d3.axisBottom(xScale))

                var yAxis = svg.append("g")
                    .attr("class", yAxis)
                    .call(d3.axisLeft(yScale))
                    .selectAll("rect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("stroke", "transparent")
                    .attr("stroke-width", 4)
                    .attr("class", "bar2")
                    .transition()
                    .duration(3800)
                    .delay((d, i) => (i + 1) * 200)
                    .ease(d3.easeElastic)
                    .attr("height", yScale.bandwidth())
                    .attr("x", 0.5)
                    .attr("y", function(d) {
                        return yScale(d.country)
                    })
                    .attr("width", 0)
                    .transition()
                    .duration(1600)
                    .delay((d, i) => (i + 1) * 200)
                    .ease(d3.easeElastic)
                    .attr("width", function(d) {
                        return xScale(d.growth)
                    })
                    .style("fill", "#005EB8")
                    .on('end', function() {
                        d3.select(this)
                            .on("mouseover", function() {
                                d3.select(this)
                                    .transition().duration(600)
                                    .attr("stroke", "#00a3a1")
                                    .attr("stroke-width", 3)
                                    .style("fill", "#00a3a1")
                                d3.selectAll(".textCircle2")
                                    .transition().duration(600)
                                    .attr("r", yScale.bandwidth() / 1.9)
                                    .attr("stroke", "#00a3a1")
                                    .attr("stroke-width", 1)
                            })
                            .on("mouseout", function() {
                                d3.select(this)
                                    .transition()
                                    .duration(600)
                                    .attr("stroke", "transparent")
                                    .attr("stroke-width", 0)
                                    .style("fill", "#005EB8")
                                d3.selectAll(".textCircle2")
                                    .transition().duration(600)
                                    .attr("r", yScale.bandwidth() / 2)
                                    .attr("stroke", "transparent")
                            })

                    })

                var newG = svg.append("g")

                newG.selectAll("circle")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("class", "textCircle2")
                    .attr("cx", d => xScale(d.growth))
                    .attr("cy", d => yScale(d.country) + yScale.bandwidth() / 2)
                    .attr("r", 0)
                    .transition()
                    .duration(1200)
                    .delay((d, i) => (i + 1) * 450)
                    .attr("r", yScale.bandwidth() / 2)
                    .attr("opacity", 1)
                    .style("fill", "#0091DA")
                    .attr("stroke", "transparent")
                    .ease(d3.easeElastic)


                var newG4text = svg.append("g").attr("class", "newG4text")

                newG4text.selectAll(".text").data(data)
                    .enter()
                    .append("text")
                    .attr("x", d => xScale(d.growth))
                    .attr("y", d => yScale(d.country) + yScale.bandwidth() / 2)
                    .attr("dx", "-.45em")
                    .attr("dy", ".4em")
                    .style("font-size", ".8em")
                    .style("fill", "#FFF")
                    .text(d => d.growth)

            }

            /*====================================FUNCTION FOR THE THIRD COL=====================================*/

            function draw3() {

                var width = $(".chartDivs3").width();
                var height = $(".chartDivs3").height();


                var data = [{
                    country: "Europe",
                    growth: 5
                }, {
                    country: "Asia",
                    growth: 10
                }, {
                    country: "America",
                    growth: 15
                }, {
                    country: "Australia",
                    growth: 20
                }, {
                    country: "Africa",
                    growth: 25
                }, {
                    country: "BeerHouse",
                    growth: 30
                }, {
                    country: "Journal",
                    growth: 35
                }, {
                    country: "Jerusalem",
                    growth: 40
                }, {
                    country: "Linares",
                    growth: 47
                }];

                //set margins
                var margin = {
                    top: 20,
                    right: 30,
                    bottom: 30,
                    left: 40
                };
                var width = width - margin.left - margin.right * 2.5;
                var height = height - margin.top - margin.bottom;

                //set scales & ranges

                var xScale = d3.scaleLinear()
                    .range([0, width * 1.1])

                var yScale = d3.scaleBand()
                    .range([30, height]).padding(.3)

                //draw the svg

                var svg = d3.select(".chartDivs3")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right * 3)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left * 1.4 + "," + margin.top + ")")

                //Add a Title
                svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 11)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("text-decoration", "underline")
                    .text("Another another title");

                //force data

                data.forEach(function(d) {
                    return d.growth = +d.growth;
                });

                //set domains

                yScale.domain(data.map(d => d.country))

                xScale.domain([0, d3.max(data, d => d.growth)])

                //add X & Y axes and append the bars to Y axis

                var xAxis = svg.append("g")
                    .attr("class", xAxis)
                    .attr("transform", "translate(" + 0 + "," + height + ")")
                    .call(d3.axisBottom(xScale))

                var yAxis = svg.append("g")
                    .attr("class", yAxis)
                    .call(d3.axisLeft(yScale))
                    .selectAll("rect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("stroke", "transparent")
                    .attr("stroke-width", 4)
                    .attr("class", "bar3")
                    .attr("height", yScale.bandwidth())
                    .transition()
                    .duration(3800)
                    .delay((d, i) => (i + 1) * 200)
                    .ease(d3.easeElastic)
                    .attr("x", 0.5)
                    .attr("y", function(d) {
                        return yScale(d.country)
                    })
                    .transition()
                    .duration(3800)
                    .delay((d, i) => (i + 1) * 200)
                    .ease(d3.easeElastic)
                    .attr("width", function(d) {
                        return xScale(d.growth)
                    })
                    .style("fill", "#0091DA")
                    .on('end', function() {
                        d3.select(this)
                            .on("mouseover", function() {
                                d3.select(this)
                                    .transition().duration(600)
                                    .attr("stroke", "#00338D")
                                    .attr("stroke-width", 3)
                                    .style("fill", "#00338D")
                                d3.selectAll(".textCircle3")
                                    .transition().duration(600)
                                    .attr("r", yScale.bandwidth() / 1.9)
                                    .style("fill", "#6D2077")
                                    .attr("stroke", "#00338D")
                                    .attr("stroke-width", 1)
                            })
                            .on("mouseout", function() {
                                d3.select(this)
                                    .transition()
                                    .duration(600)
                                    .attr("stroke", "transparent")
                                    .attr("stroke-width", 0)
                                    .style("fill", "#0091DA")
                                d3.selectAll(".textCircle3")
                                    .transition().duration(600)
                                    .attr("r", yScale.bandwidth() / 2)
                                    .style("fill", "#00338D")
                                    .attr("stroke", "transparent")
                            })

                    })

                var newG = svg.append("g")

                newG.selectAll("circle")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("class", "textCircle3")
                    .attr("cx", d => xScale(d.growth))
                    .attr("cy", d => yScale(d.country) + yScale.bandwidth() / 2)
                    .attr("r", 0)
                    .transition()
                    .duration(1200)
                    .delay((d, i) => (i + 1) * 450)
                    .attr("r", yScale.bandwidth() / 2)
                    .attr("opacity", 1)
                    .style("fill", "#00338D")
                    .attr("stroke", "transparent")
                    .ease(d3.easeElastic)


                var newG4text = svg.append("g").attr("class", "newG4text")

                newG4text.selectAll(".text").data(data)
                    .enter()
                    .append("text")
                    .attr("x", d => xScale(d.growth))
                    .attr("y", d => yScale(d.country) + yScale.bandwidth() / 2)
                    .attr("dx", "-.45em")
                    .attr("dy", ".4em")
                    .style("font-size", ".8em")
                    .style("fill", "#FFF")
                    .text(d => d.growth)

            }

            /*========================================== SECOND ROW OF CHARTS =============================================*/

            function DrawVerticalBarChart() {

                //set width and height of the chart							
                var width = $(".chartDivs4").width(),
                    height = $(".chartDivs4").height();

                //set margins
                var margin = {
                    top: 20,
                    right: 30,
                    bottom: 30,
                    left: 40
                };

                var width = width - margin.left - margin.right * 2.5;
                var height = height - margin.top - margin.bottom;


                var data = [{
                    country: "Europe",
                    growth: 5
                }, {
                    country: "Asia",
                    growth: 10
                }, {
                    country: "America",
                    growth: 15
                }, {
                    country: "Australia",
                    growth: 20
                }, {
                    country: "Africa",
                    growth: 25
                }];

                //set margins
                var margin = {
                    top: 20,
                    right: 30,
                    bottom: 30,
                    left: 40
                };

                //set scales and ranges
                var xScale = d3.scaleBand().range([0, width * 1.1]).padding(.1)

                var yScale = d3.scaleLinear().range([height, 30])

                //append the svg element and central g
                var svg = d3.select(".chartDivs4")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right * 3)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("class", "mainSvgG")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                //Add a Title
                svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 11)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("text-decoration", "underline")
                    .text("Title for a vertical bar chart");

                data.forEach(function(d) {
                    return d.growth = +d.growth;
                });

                //set domains
                xScale.domain(data.map(function(d) {
                    return d.country;
                }))

                yScale.domain([0, d3.max(data, function(d) {
                    return d.growth
                })]).nice();

                //set axes

                var xAxis = svg.append("g")
                    .attr("transform", "translate(" + 0 + "," + height + ")")
                    .call(d3.axisBottom(xScale))


                svg.selectAll("rects")
                    .data(data)
                    .enter()
                    .append("rect")
                    .transition()
                    .duration((d, i) => (1 + i) * 1500)
                    .delay((d, i) => (1 + i) * 500)
                    .attr("x", function(d) {
                        return xScale(d.country)
                    })
                    .attr("y", (d) => height - yScale(d.growth))
                    .ease(d3.easeElastic)
                    .attr("width", xScale.bandwidth())
                    .attr("height", function(d) {
                        return yScale(d.growth)
                    })

                .attr("fill", "#470A68")



                var yAxis = svg.append("g")
                    .call(d3.axisLeft(yScale));


            }

            function DrawVerticalBarChart2() {

                //set width and height of the chart							
                var width = $(".chartDivs6").width(),
                    height = $(".chartDivs6").height();

                //set margins
                var margin = {
                    top: 20,
                    right: 30,
                    bottom: 30,
                    left: 40
                };

                var width = width - margin.left - margin.right * 2.5;
                var height = height - margin.top - margin.bottom;


                var data = [{
                    country: "Europe",
                    growth: 5
                }, {
                    country: "Asia",
                    growth: 10
                }, {
                    country: "America",
                    growth: 15
                }, {
                    country: "Australia",
                    growth: 20
                }, {
                    country: "Africa",
                    growth: 25
                }];

                data.reverse()

                //set margins
                var margin = {
                    top: 20,
                    right: 30,
                    bottom: 30,
                    left: 40
                };

                //set scales and ranges
                var xScale = d3.scaleBand().range([0, width * 1.1]).padding(.1)

                var yScale = d3.scaleLinear().range([height, 30])

                //append the svg element and central g
                var svg = d3.select(".chartDivs6")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right * 3)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("class", "mainSvgG")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                //Add a Title
                svg.append("text")
                    .attr("x", (width / 2))
                    .attr("y", 11)
                    .attr("text-anchor", "middle")
                    .style("font-size", "16px")
                    .style("text-decoration", "underline")
                    .text("Title for a vertical bar chart");

                data.forEach(function(d) {
                    return d.growth = +d.growth;
                });

                //set domains
                xScale.domain(data.map(function(d) {
                    return d.country;
                }))

                yScale.domain([0, d3.max(data, function(d) {
                    return d.growth
                })]).nice();

                //set axes

                var xAxis = svg.append("g")
                    .attr("transform", "translate(" + 0 + "," + height + ")")
                    .call(d3.axisBottom(xScale))


                svg.selectAll("rects")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("x", function(d) {
                        return xScale(d.country)
                    })
                    .transition()
                    .duration((d, i) => (i + 1) * 500)
                    .attr("y", (d) => height - yScale(d.growth))
                    .transition()
                    .duration((d, i) => (i + 1) * 1500)
                    .ease(d3.easeElastic)
                    .duration((d, i) => (1 + i) * 1000)
                    .delay((d, i) => (1 + i) * 30)
                    .attr("width", xScale.bandwidth())
                    .attr("height", function(d) {
                        return yScale(d.growth)
                    })

                .attr("fill", "#470A68")



                var yAxis = svg.append("g")
                    .attr("transform", "translate(" + width - margin.left + "," + 0 + ")")
                    .call(d3.axisRight(yScale));


            }

            draw();
            /*draw2();*/
            draw3();
            DrawVerticalBarChart()
            DrawVerticalBarChart2()

            $(window).resize(function() {
                $(window).resize(function() {
                    location.reload();
                });
                $(".chartDivs1,.chartDivs2,.chartDivs3,.chartDivs4,.chartDivs6,").empty();
                draw();
                draw2();
                draw3();
                DrawVerticalBarChart()
                DrawVerticalBarChart2()
            });

        })