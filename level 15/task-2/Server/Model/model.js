const mongoose = require("mongoose");

const JournalEntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tags: [  String ]
},{
    timestamps: true
});

const JournalEntry = mongoose.model("JournalEntry", JournalEntrySchema);
module.exports = JournalEntry;
