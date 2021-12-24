// Basic Boolean Logic

const hasDriversLicens = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicens);
console.log(hasDriversLicens && hasGoodVision);
console.log(hasDriversLicens || hasGoodVision);
console.log(hasDriversLicens);

const isTired = false;

console.log(hasDriversLicens && hasGoodVision && isTired);

if (hasDriversLicens && hasGoodVision && isTired); {
    console.log('She Should be able to drive 🩰🌸');
} else {
    console.log('Someone else should drive')
}
