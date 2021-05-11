// here the biz logic of our country entity will be defined
// ATM we don't have any

export default function buildMakeCountry() {
  return function makeCountry() {
    validateCountry()

    return Object.freeze({
      // getSomething: () => something
    })

    function validateCountry() {
      // if (!requiredProperty) {
      //   throw new Error('requiredProperty is missing in country')
      // }
    }
  }
}
