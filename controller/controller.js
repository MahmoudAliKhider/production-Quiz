import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

export const getQuestions = async (req, res) => {
    try {
        const questions = await Questions.find();
        res.json(questions);
    } catch (error) {
        res.error({ error });
    }
}

export const insertQuestions = async (req, res) => {
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully....." });
    } catch (error) {
        res.error({ error })
    }
}

export const dropQuestions = async (req, res) => {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        res.json({ error })
    }
}

export const getResult = async (req, res) => {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export const storeResult = async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username && !result) throw new Error('Data Not Provided...!');

        await Results.create({ username, result, attempts, points, achived });
        res.json({ msg: "Result Saved Successfully...!" });

    } catch (error) {
        res.json({ error })

    }
}

export const dropResult = async (req, res) => {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}