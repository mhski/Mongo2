db.people.aggregate(
    [
        {
            $project: {
            "index": {
                  "$divide": [
                    { "$toDecimal": "$weight" },
                    { "$pow": [{ "$divide": [{ "$toDecimal": "$height" }, 100] }, 2] }
                  ]
                },"nationality":1
            }
        },
        {
            $group: {
                _id: "$nationality",
                "avgBmi": { "$avg": "$index" },
                "minBmi": { "$min": "$index" },
                "maxBmi": { "$max": "$index" } 
            }
        }
    ],
).forEach(e => printjsononeline(e));
