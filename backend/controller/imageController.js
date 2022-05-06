const Image = require('../db/models/image');

const image_index = (req, res) => {
    Image.find().sort({ createdAt: 1})
        .then((result) => {
            res.send(result);
        })
        .catch((e) => {
            console.log(e);
            res.send(e);
        });
}

const image_create_image = (req, res) => {
    const image = new Image(req.body);

    image.save()
        .then((result) => {
            res.send(result);
        })
        .catch((e) => {
            console.log(e);
            res.send(e);
        })
}

const image_delete_image = (req, res) => {
    const id = req.params.id;

    Image.findByIdAndDelete(id)
        .then((result) => {
            res.send(result);
        })
        .catch((e) => {
            console.log(e);
            res.send(e);
        })
}

module.exports = {
    image_index,
    image_create_image,
    image_delete_image
}