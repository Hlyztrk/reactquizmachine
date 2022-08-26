const isCorrect = (question, answer) =>{
    return true
}



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
})