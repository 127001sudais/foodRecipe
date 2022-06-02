
/**
 * GET/
 * Homepage
 */

exports.homepage = async (req, res) => {
    res.render("index1", { title: "homepage" })
}