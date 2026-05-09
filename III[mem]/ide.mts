import defaultIde from "./../../data/default.ide";

/**
 *
 * @param {string} name model name as defined in default.ide
 * @returns {number} model id
 */
export function car([name] : TemplateStringsArray) {
  let nameLower = name.toLowerCase();
  const models = defaultIde.cars;

  const model = models.find((line) => line[1].toLowerCase() === nameLower);

  if (model) {
    return parseInt(model[0]);
  }
  throw new Error(`Model with the name ${name} not found in default.ide`);
}

/**
 *
 * @param {string} name model name as defined in default.ide
 * @returns {number} model id
 */
export function hier([name] : TemplateStringsArray) {
  let nameLower = name.toLowerCase();
  const models = defaultIde.hier;

  const model = models.find((line) => line[1].toLowerCase() === nameLower);

  if (model) {
    return parseInt(model[0]);
  }
  throw new Error(`Model with the name ${name} not found in default.ide`);
}

/**
 *
 * @param {string} name model name as defined in default.ide
 * @returns {number} model id
 */
export function ped([name] : TemplateStringsArray) {
  let nameLower = name.toLowerCase();
  if (nameLower === 'player') {
    return 0;
  }
  const models = defaultIde.peds;
  const model = models.find((line) => line[1].toLowerCase() === nameLower);
  if (model) {
    return parseInt(model[0]);
  }
  throw new Error(`Model with the name ${name} not found in default.ide`);
}