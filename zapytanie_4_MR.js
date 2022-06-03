let bmi_min_max = db.people.mapReduce(
    function() { 
            let height_in_meters = parseFloat(this.height) * 0.01
        let weight = parseFloat(this.weight)
        let bmi = (weight / (height_in_meters * height_in_meters))
        emit(this.nationality, {"bmiMin": bmi, "bmiMax": bmi}) 
    },
    function(key, values) { return values.reduce((a, b) => {
            return {
                "bmiMin": Math.min(a["bmiMin"], b["bmiMin"]), 
                "bmiMax": Math.max(a["bmiMax"], b["bmiMax"]),
            } 
        }) 
    },
    { out: { inline: 1 } }
)
