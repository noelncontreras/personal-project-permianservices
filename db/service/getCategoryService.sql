SELECT s.service_id, s.category_id, s.user_id, s.service_description, u.user_phone_number, u.name FROM service s
INNER JOIN category c
ON s.category_id = c.category_id
INNER JOIN permianuser u
ON u.user_id = s.user_id
WHERE c.category_id = $1
ORDER BY service_id ASC;