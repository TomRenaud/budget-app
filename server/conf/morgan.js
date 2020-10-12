export const morganOpts = {
    skip: (req, res) => {
        if(res.statusCode <= 400 && req.method === 'GET' && req.url === '/') {
            return true;
        } else if(req.method === 'POST') {
            return true;
        }
        return false;
    }
}