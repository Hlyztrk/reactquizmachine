const isCorrect = require("../src/model/isCorrect")

describe("isCorrect", ()=>{
    describe("when given the correct answer", ()=>{
        it("should return true", ()=>{
            const question = {
                id:8,
                question : "What brand of beer does Homer Simpson drink?",
                correctAnswer : "Duff beer"
            }
            const answer = "Duff beer"

            const result = isCorrect(question,answer)

            expect(result).toBeTruthy()
        })
    })

    describe("when given the wrong answer", ()=>{
        it("should return false", ()=>{
            const question = {
                id:8,
                question : "What brand of beer does Homer Simpson drink?",
                correctAnswer : "Duff beer"
            }
            const answer = "Facebook"

            const result = isCorrect(question,answer)

            expect(result).toBeFalsy()
        })
    })
})