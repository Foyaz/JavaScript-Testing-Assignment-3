describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      const button = document.querySelector('#click-me')
      button.click();
      expect(counter.innerHTML).toBe('120')
    })
  })


  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      const button = document.querySelector('#click-me')
      expect(button.id).toBe('click-me')
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(1)).toBe(1);
      expect(factorial(3)).toBe(6);
      expect(factorial(5)).toBe(120);
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-1)).toBe(1);
      expect(factorial(-101)).toBe(1);
      expect(factorial(-591)).toBe(1);
    })
  })

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {
      const computer = new Computer();
      expect(computer.hardDriveSpace).toBe(512);
    })

    describe("installProgram", () => {
      const computer = new Computer();
      beforeEach(function(done){
        computer.installProgram(300,function() {
          done();
        })
      })
      it("can install a program if there is sufficient space", (done) => {
      expect(computer.hardDriveSpace).toBe(212) 
       done();
      })
      describe("installProgram", () => {
        const computer = new Computer();
        beforeEach(function(done){
          computer.installProgram(700,function() {
            done();
          })
        })
      it("will not install the program if there is insufficient space", (done) => {
    expect(computer.hardDriveSpace).toBe(512)
    done();
      })
    })
  })
    describe("format", () => {
      it("resets the hard drive to 512, even after programs have been installed", () => {
      const computer = new Computer();
      computer.format();
      expect(computer.hardDriveSpace).toBe(512);
      });
    })
  })
})
