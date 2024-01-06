const fields = {
    entities: [
        "name", "contact", "type", "address",
        "city", "state", "pincode", "gst",
        "regdNo",
    ],
    users: [
        "name", "email", "mobile", "role", "entity",
    ],
    otp: ["mobile"],
    otpVerification : ["mobile", "otp"],
    request: ["itemName"]
};

export const validate = (body, entity) => {
    const requiredFields = fields[entity];
    return _checkRequiredFields(body, requiredFields);
};

export const sanitizeValue = value => _isEmpty(value) ? 0 : isNaN(value) ? 0 : value;

const _checkRequiredFields = (body,requiredFields) => {
    for(let field of requiredFields){
        if(_isEmpty(body[field])){
            return false;
        }
    }
    return true;
};

const _isEmpty = value => {
    return value === null || value === undefined || value.toString().trim().length === 0;
};