const mongoose = require("mongoose");
const AddReminderSchema = new mongoose.Schema({
  ReminderName: {
    type: String,
    required: true,
  },
  everyDayReminder: {
    type: String,
    required: true,
  },
  timeReminder: {
    type: String,
    required: true,
  },
  dateReminder: {
    type: String,
    required: true,
  },
  toReminder: {
    type: String,
    required: true,
  },
  contentReminder: {
    type: String,
    required: true,
  },
});

const AddReminderModel = mongoose.model("AddReminder", AddReminderSchema);
module.exports = { AddReminderModel };
