const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(`hut ${err}`);
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

export default errorHandlerMiddleware;
