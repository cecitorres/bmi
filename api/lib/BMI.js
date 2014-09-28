/**
 * BMI Class
 * @param {float} weight The weight of the person
 * @param {height} height The height of the person
 */
function BMI(weight, height) {
	this.weight = weight;
	this.height = height;
	this.bmi;

	/**
	 * Check if a given number is an integer
	 * @param  {integer or float}  n The number to check for
	 * @return {Boolean}        
	 */
	this.isInt = function(n) { return parseInt(n) === n };
}

/**
 * Getter
 * @return {float} The height
 */
BMI.prototype.getHeight = function() {
	return this.height;
}

/**
 * Setter
 * @param {float} height [description]
 */
BMI.prototype.setHeight = function(height) {
	this.height = height;
}

BMI.prototype.getWeight = function() {
	return this.weight;
}

BMI.prototype.setWeight = function(weight) {
	this.weight = weight;
}

/**
 * Get the Body Mass Index
 * @return {float} The body mass index calculated
 */
BMI.prototype.getBMI = function() {
	var self = this;

	// if this is an integer, then we have centimeters
	// and we need to convert them to meters
	if(self.isInt(self.height)) {
		self.height = self.height/100;
	}

	// calculate
	this.bmi = self.weight/(self.height*self.height);
	return parseFloat(this.bmi.toFixed(2));
}

// BMI.prototype.convertPoundsToKilos = function(lb) {
// 	var kg = lb/2.2046;
// 	return kg;
// }

// BMI.prototype.convertHeightToMeters = function(feet, inches) {
// 	var _inches = (feet * 12) + inches;
// 	var cm = inches * 2.54;
// 	var meters = cm/100;

// 	return meters;
// }

BMI.prototype.getCategory = function(n) {
	var bmi = parseFloat(n);
	if(bmi < 15) {
		return "Very severely underweight";
	}
	else if(bmi >= 15.0 && bmi < 16.0) {
		return "Severely underweight";
	}
	else if(bmi >= 16.0 && bmi < 18.5) {
		return "Underweight";
	}
	else if(bmi >= 18.5 && bmi < 25) {
		return "Normal (healthy weight)";
	}
	else if(bmi >= 25 && bmi < 30) {
		return "Overweight";
	}
	else if(bmi >= 30 && bmi < 35) {
		return "Moderately obese";
	}
	else if(bmi >= 35 && bmi < 40) {
		return "Severely obese";
	}
	else if(bmi >= 40) {
		return "Very severely obese";
	}
	else {
		return "That's not a category";
	}
}

module.exports = BMI;