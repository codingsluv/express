exports.getCategories = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: [
            { id: 1, name: 'Electronics' },
            { id: 2, name: 'Clothing' },
            { id: 3, name: 'Books' },
        ],
    })
}

exports.storeCategories = (req, res) => {
    let name = req.body.name
    let desc = req.body.desc

    if (!name && !desc) {
        res.status(404).json({
            status: 'fail',
            error: 'validation failed',
        })
    }

    return res.status(200).json({
        status:'success',
        mssg: 'category created successfully',
    })
}