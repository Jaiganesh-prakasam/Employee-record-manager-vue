import type { IEmpDetails } from '@/types/EmpDetails';
import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      employee: Model.extend<Partial<IEmpDetails>>({}),
    },

    seeds(server) {
      // Seed initial employee data
      server.create('employee', {
        id: 1,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [{ url: 's/s', type: 'facebook' }],
        },
        empSkill: [
          { skill: 'angular', rate: 7.5 },
          { skill: 'javascript', rate: 7 },
        ],
        empExperience: [
          {
            companyName: 's',
            location: { city: 'chennai', country: 'india' },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '2015-06-06',
            toDate: '2018-03-31',
            experience: 3,
          },
          {
            companyName: 'abc2',
            location: { city: 'chennai', country: 'india' },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '2018-04-01',
            toDate: '2020-04-01',
            experience: 2,
          },
        ],
      });
      // Add more employees as needed
    },

    routes() {
      this.namespace = 'api'; // Set the API namespace

      // GET /api/employees
      this.get('/employees', (schema) => {
        return schema.all('employee');
      });

      // GET /api/employees/:id
      this.get('/employees/:id', (schema, request) => {
        const id = request.params.id;
        return schema.find('employee', id);
      });

      // POST /api/employees
      this.post('/employees', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('employee', attrs);
      });

      // DELETE /api/employees/:id
      this.delete('/employees/:id', (schema, request) => {
        const id = request.params.id;
        return schema.find('employee', id)?.destroy();
      });
    },
  });
}
