import axios from 'axios';
import ServerApi from '../../public/contants/contantsService';

const api_url = `${ServerApi}/ambulancia`

const RambulanciabyId = async(id) => axios.get(
        `${api_url}/RambulanciabyId?id=${id}`,{
            headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJkb2MiOnsiX2lkIjoiNjMwOWQ4N2VjYzlkNDMzMGU4OTFiMjg5IiwibmFtZSI6ImRpZWdvIGF4c2VsIGdhcmNpYSBzaWVycmEiLCJhZ2UiOjEwLCJlbWFpbCI6ImRpZWdvQGdtYWlsLmNvbSIsInBhc3N3ZCI6IiQyYSQxMCR2RWxUMjN4MlhySGJrM0VLcXFMYjNldVBqM2VrOS5nVkRydnI0MFNQMnhLZFkwQ0t2Mi9HdSIsInJvbCI6InVuYXNzaWduZWQiLCJjcmVhdGVkIjoiMjAyMi0wOC0yN1QwODo0MDozMC41NDhaIiwiaWRfYW1idWxhbmNpYSI6WyI2MzY4YjhlYzdmNDQxNWZiNzQyNmY3MGYiXX0sImV4cCI6MTY3MTI4NTQ0N30.ShHu8CWgGvu02x3yQsEPNY_QUrXqRfXINQfmRQ2_-sQ`
            }
        })

export default RambulanciabyId