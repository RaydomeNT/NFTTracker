const Project = require("../projectModel/project");
const mongoose = require("mongoose");

//get all projects
const getProjects = async (req, res) => {
  const user_id = req.user._id
  
  const projects = await Project.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(projects);
};

//get single project
const getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such project" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(400).json({ error: "No such project" });
  }

  res.status(200).json(project);
};

//create a new project
const createProject = async (req, res) => {
  const { title, price, date, time, wl, walletSub, maxAmount, twitterLink } =
    req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (emptyFields.lenght > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in the missing information", emptyFields });
  }

  //add project to db
  try {
    const user_id = req.user._id
    const project = await Project.create({
      title,
      price,
      date,
      time,
      wl,
      walletSub,
      maxAmount,
      twitterLink,
      user_id
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such project" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(400).json({ error: "No such project" });
  }

  res.status(200).json(project);
};

//update a project
const updateProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such project" });
  }

  const project = await Project.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }, 
    {
      new: true
    }
  );

  if (!project) {
    return res.status(400).json({ error: "No such project" });
  }

  res.status(200).json(project);
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
};
