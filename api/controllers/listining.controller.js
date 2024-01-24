import Listining from "../models/listining.model.js";

export const deleteListings = async (req, res, next) => {
  try {
    const listining = await Listining.findByIdAndDelete(req.params.id);
    res.status(200).json("Listining deleted successfully");
  } catch (error) {
    next(error);
  }
};
export const createListining = async (req, res, next) => {
  try {
    const listining = await Listining.create(req.body);
    res.status(200).json(listining);
  } catch (error) {
    next(error);
  }
};

export const updateListings = async (req, res, next) => {
  // if(req.params.id  !== listining.userRef){
  //     return next(errorHandler(401, 'you can not update this listining'))
  // }

  try {
    const listining = await Listining.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(listining);
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  try {
    const listings = await Listining.findById(req.params.id);
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

export const getListining = async (req, res, next) => {
  try {
   
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = parseInt(req.query.startIndex) || 0;
    let offer = req.query.offer;

    if (offer === undefined || offer === "false") {
      offer = { $in: [false, true] };
    }
    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;

    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";

    const listining = await Listining.find({
      name: { $regex: searchTerm, $options: "i" },
      type,
      offer,
      furnished,
       parking
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listining);
  } catch (error) {
    next(error);
  }
};
