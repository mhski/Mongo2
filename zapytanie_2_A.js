db.people.aggregate([
        {
            $match: {
            }
        },
        {
            $unwind: {
                path: "$credit",
            }
        },
        {
            $group: {
                _id: "$credit.currency", suma: { $sum: { $toDecimal: '$credit.balance' } } 
            }
        }
    ],
).forEach(e => printjsononeline(e));
