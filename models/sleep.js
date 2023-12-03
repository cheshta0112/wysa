const mongoose = require("mongoose");
const { Schema } = mongoose;

const sleepSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newUserData",
      index: true,
    },
    positiveChanges: {
      type: Number,
      enum: [1, 2, 3],
    },
    sleepStruggle: {
      type: Number,
      enum: [1, 2, 3],
    },
    bedtime: Date,
    waketime: Date,
    sleepDuration: { type: Number, min: 1, max: 8 },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("newSleepData", sleepSchema);
