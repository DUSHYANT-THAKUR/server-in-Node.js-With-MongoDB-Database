module.exports.test = async(req,res)=> {
    try {
let result = "completed";
return res.status(200).json(
    {
        message : result
    }
)
    } catch (err) {
        console.log(err);
        return res.status(500).json(
            {
                err,
                Message : "Internal Server Error"
            }
        )
    }
}