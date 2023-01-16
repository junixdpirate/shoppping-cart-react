export default (req, res) => {
    const {q, s, slug} = req.query

    res.status(200).json([q, s, ...slug])
}