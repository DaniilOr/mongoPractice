db.createUser({
    user: 'app',
    pwd: 'pass',
    roles: [
        {
            role: 'readWrite',
            db: 'db',
        }
    ]
});
db.createCollection('payments', {
    validator: {
        $jsonSchema: {
            bsonType: 'Object',
            required: ['user_id', 'payments'],
            properties: {
                payments: {
                    bsonType: 'Object',
                    required: ['icon', 'name', 'link'],
                    properties: {
                        icon: {
                            bsonType: "string",
                        },
                        name: {
                            bsonType: "string",
                        },
                        link: {
                            bsonType: "string",
                        }
                    }
                }
            }
        }
    }
});