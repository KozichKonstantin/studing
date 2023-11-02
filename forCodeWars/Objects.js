const Incert = {
  __prototype__: Input,
  validate: function () {
    if (typeof this.value == "string") {
      return true;
    } else {
      return false;
    }
  },
  seeInside: function () {
    if (this.validate() == true) {
      return this._value;
    } else {
      console.error("something wrong");
    }
  },
};
