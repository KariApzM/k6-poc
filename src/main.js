import http from 'k6/http';

export default function () {
    console.log(`client_id: ${__ENV.client_id}`);
    console.log(`secret: ${__ENV.secret}`);

    http.get('https://quickpizza.grafana.com');
}