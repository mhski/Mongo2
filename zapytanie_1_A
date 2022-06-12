db.people.aggregate(
    [
        {
            $match: {
            }
        },
        {
            $group: {_id: "$sex", avg_height: { $avg: { $toDecimal: '$height' } }, avg_weight: { $avg: { $toDecimal: '$weight' } }}
        }
    ],
).forEach(e => printjsononeline(e));
