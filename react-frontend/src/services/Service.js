import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8000/contract";

class Service {

   
   getContracts(){
    return axios.get(EMPLOYEE_API_BASE_URL);
   }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }


    createContract(contract){
        return axios.post(EMPLOYEE_API_BASE_URL,contract);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new Service()