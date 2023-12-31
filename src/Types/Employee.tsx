type Employee = {
    id:                 string,
    first_name:         string,
    middle_name:        string,
    last_name:          string
    address:            string,
    contact_no:         string,
    position_id:        string,
    position_name:      string,
    rate:               string,
    payout:             string,
    SSS:                string,
    attendance?:        any[],
};

export type EmployeeError = {
    id:                 boolean,
    first_name:         boolean,
    middle_name:        boolean,
    last_name:          boolean
    address:            boolean,
    contact_no:         boolean,
    position_id:        boolean,
    rate:               boolean,
    payout:             boolean,
    SSS:                boolean,
}

export const emptyEmployee = {
    address: "",
    contact_no: "",
    first_name: "",
    id: "",
    middle_name: "",
    last_name: "",
    position_id: "",
    position_name: "",
    rate: "",
    payout: "",
    SSS: "",
}

export const defaultEmployeeError = {
    first_name: false,
    middle_name: false,
    last_name: false,
    address: false,
    contact_no: false,
    id: false,
    position_id: false,
    rate: false,
    payout: false,
    SSS: false,
}

export default Employee;
