SELECT *
FROM public_service AS ps, permit, permit_request AS prq, project, company AS comp;
WHERE comp.name = "Morgan SA" AND prq.permit_id AS NULL;