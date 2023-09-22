
//test for creating logo
describe('Logo', () => {
    describe('create' , () => {
        it('should create logo with parameters', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})