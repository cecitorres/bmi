var should = require("should");
var assert = require("assert");

var BMI = require("../api/lib/BMI");

describe("BMI", function() {
	describe("Test BMI class", function() {
		it("Should instantiate the BMI class", function(done) {
			var weight = 63.5;
			var height = 1.70;

			var bmi = new BMI(weight, height);

			bmi.should.be.type("object");
			done();
		});
	});

	describe("Test isInt method", function() {
		it("Number should be an integer", function(done) {
			var weight = 63.5;
			var height = 1.70;

			var bmi = new BMI(weight, height);

			bmi.isInt(100).should.be.true;			
			done();
		});

		it("Number should not be an integer", function(done) {
			var weight = 63.5;
			var height = 1.70;

			var bmi = new BMI(weight, height);

			bmi.isInt(100.50).should.not.be.true;			
			done();
		});

		it("Should test the setter and getter of weight", function(done) {
			var weight = 63.5;
			var height = 1.70;

			var bmi = new BMI(weight, height);

			bmi.setWeight(70.5);

			bmiWeight = bmi.getWeight();

			bmiWeight.should.equal(70.5);			
			done();
		});

		it("Should test the setter and getter of height", function(done) {
			var weight = 63.5;
			var height = 1.70;

			var bmi = new BMI(weight, height);

			bmi.setHeight(1.85);

			bmiWeight = bmi.getHeight();

			bmiWeight.should.equal(1.85);			
			done();
		});

		it("Should get the BMI given meters", function(done) {
			var weight = 63.5;
			var height = 1.70;

			var bmi = new BMI(weight, height);

			bmi.getBMI().should.equal(21.97);
			done();
		});

		it("Should get the BMI given centimeters", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);

			bmi.getBMI().should.equal(21.97);
			done();
		});		

		it("Should test the category Very severely underweight", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(14).should.equal("Very severely underweight");
			bmi.getCategory(14.9).should.equal("Very severely underweight");
			bmi.getCategory(15).should.not.equal("Very severely underweight");

			done();
		});

		it("Should test the category Severely underweight", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(15).should.equal("Severely underweight");
			bmi.getCategory(15.0).should.equal("Severely underweight");
			bmi.getCategory(15.9).should.equal("Severely underweight");
			bmi.getCategory(16).should.not.equal("Severely underweight");

			done();
		});

		it("Should test the category Underweight", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(16).should.equal("Underweight");
			bmi.getCategory(16.0).should.equal("Underweight");
			bmi.getCategory(18).should.equal("Underweight");
			bmi.getCategory(18.4).should.equal("Underweight");
			bmi.getCategory(18.5).should.not.equal("Underweight");
			bmi.getCategory(19).should.not.equal("Underweight");

			done();
		});

		it("Should test the category Normal (healthy weight)", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(18.5).should.equal("Normal (healthy weight)");
			bmi.getCategory(19.0).should.equal("Normal (healthy weight)");
			bmi.getCategory(19).should.equal("Normal (healthy weight)");
			bmi.getCategory(24.9).should.equal("Normal (healthy weight)");
			bmi.getCategory(24).should.equal("Normal (healthy weight)");
			bmi.getCategory(25).should.not.equal("Normal (healthy weight)");

			done();
		});

		it("Should test the category Overweight", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(25).should.equal("Overweight");
			bmi.getCategory(25.0).should.equal("Overweight");
			bmi.getCategory(29).should.equal("Overweight");
			bmi.getCategory(29.9).should.equal("Overweight");
			bmi.getCategory(30).should.not.equal("Overweight");

			done();
		});

		it("Should test the category Moderately obese", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(30).should.equal("Moderately obese");
			bmi.getCategory(30.0).should.equal("Moderately obese");
			bmi.getCategory(34).should.equal("Moderately obese");
			bmi.getCategory(34.9).should.equal("Moderately obese");
			bmi.getCategory(35).should.not.equal("Moderately obese");

			done();
		});

		it("Should test the category Severely obese", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(35).should.equal("Severely obese");
			bmi.getCategory(35.0).should.equal("Severely obese");
			bmi.getCategory(39).should.equal("Severely obese");
			bmi.getCategory(39.9).should.equal("Severely obese");
			bmi.getCategory(40).should.not.equal("Severely obese");

			done();
		});

		it("Should test the category Very severely obese", function(done) {
			var weight = 63.5;
			var height = 170;

			var bmi = new BMI(weight, height);
			bmi.getBMI();

			bmi.getCategory(40).should.equal("Very severely obese");
			bmi.getCategory(40.0).should.equal("Very severely obese");
			bmi.getCategory(41).should.equal("Very severely obese");

			done();
		});
	});
});