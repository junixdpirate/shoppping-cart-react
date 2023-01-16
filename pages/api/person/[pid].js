export default (req, res) => {
    const {pid} = req.query

    res.end(`Post: ${pid}`)
}