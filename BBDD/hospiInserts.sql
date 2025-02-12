INSERT INTO Plantes (Piso, CapacitatHabitacions) VALUES (1, 30);
INSERT INTO Plantes (Piso, CapacitatHabitacions) VALUES (2, 30);
INSERT INTO Plantes (Piso, CapacitatHabitacions) VALUES (3, 30);
INSERT INTO Plantes (Piso, CapacitatHabitacions) VALUES (4, 30);
INSERT INTO Plantes (Piso, CapacitatHabitacions) VALUES (5, 30);
INSERT INTO Plantes (Piso, CapacitatHabitacions) VALUES (6, 30);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (101, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (102, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (103, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (104, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (105, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (106, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (107, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (108, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (109, (SELECT Id FROM Plantes WHERE Piso = 1), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (201, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (202, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (203, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (204, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (205, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (206, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (207, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (208, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (209, (SELECT Id FROM Plantes WHERE Piso = 2), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (301, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (302, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (303, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (304, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (305, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (306, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (307, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (308, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (309, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (310, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (311, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (312, (SELECT Id FROM Plantes WHERE Piso = 3), 2);

INSERT INTO Habitacions (CodiHabitacio, PlantaId, CapacitatLlits) 
VALUES (401, (SELECT Id FROM Plantes WHERE Piso = 4), 2);



INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('101A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '101'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('101B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '101'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('102A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '102'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('102B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '102'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('103A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '103'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('103B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '103'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('104A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '104'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('104B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '104'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('105A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '105'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('105B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '105'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('106A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '106'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('106B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '106'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('107A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '107'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('107B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '107'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('108A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '108'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('108B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '108'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('109A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '109'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('109B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '109'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('201A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '201'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('201B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '201'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('202A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '202'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('202B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '202'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('203A', 0, 1, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '203'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('203B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '203'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('204A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '204'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('204B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '204'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('205A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '205'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('205B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '205'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('206A', 0, 1, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '206'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('206B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '206'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('207A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '207'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('207B', 1, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '207'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('208A', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '208'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('208B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '208'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('209A', 0, 1, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '209'));

INSERT INTO Llits (CodiLlit, Ocupat, ForaDeServei, HabitacioId) 
VALUES ('209B', 0, 0, (SELECT Id FROM Habitacions WHERE CodiHabitacio = '209'));

-- Insertar Roles
INSERT INTO Rol (Nom, Descripcio) VALUES ('Metge','Profesional responsable de la atención médica y tratamiento de pacientes.');
INSERT INTO Rol (Nom, Descripcio) VALUES ('Administratiu','Personal encargado de tareas administrativas y de gestión en el hospital.');
INSERT INTO Rol (Nom, Descripcio) VALUES ('Enfermer','Profesional encargado del cuidado y asistencia de pacientes.');
INSERT INTO Rol (Nom, Descripcio) VALUES ('Administrador del Sistema','Encargado de la gestión y mantenimiento de los sistemas informáticos del hospital.');

-- Insertar Usuari
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('juanp', 'password1', 'juanp@hospital.com', 'Administrador del Sistema',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('marial', 'password2', 'marial@hospital.com', 'Administratiu',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('cgarcia', 'password3', 'cgarcia@hospital.com', 'Metge',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('lfernandez', 'password4', 'lfernandez@hospital.com', 'Enfermer',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('mmartin', 'password5', 'mmartin@hospital.com', 'Metge',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('aperez', 'password6', 'aperez@hospital.com', 'Enfermer',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('glopez', 'password7', 'glopez@hospital.com', 'Administratiu',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('eflores', 'password8', 'eflores@hospital.com',  'Administrador del Sistema',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('jgarcia', 'password9', 'jgarcia@hospital.com',  'Metge',0x1234567890ABCDEF);
INSERT INTO Usuari (Username, Password, Email, RolId, Imagen) VALUES ('slopez', 'password10', 'slopez@hospital.com', 'Enfermer',0x1234567890ABCDEF);


-- Insertar Personal
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('12345678A', 'Juan Pérez', '600123456', 1,1);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('87654321B', 'María López', '600654321', 1,2);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('11223344C', 'Carlos García', '600112233', 1,3);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('44332211D', 'Laura Fernández', '600445566', 1,4);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('55555555E', 'Miguel Martín', '600556677', 1,5);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('66666666F', 'Ana Pérez', '600667788', 1,6);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('77777777G', 'Gonzalo López', '600778899', 1,7);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('88888888H', 'Elena Flores', '600889900', 1,8);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('99999999I', 'Jorge García', '600990011', 1,9);
INSERT INTO Personal (DNI, Nom, Telefon, Actiu, UsuariId) VALUES ('10101010J', 'Sara López', '600101112', 1,10);


-- Insertar Administratiu
INSERT INTO Administratiu (Id, Area) VALUES ((SELECT Id FROM Personal WHERE DNI = '12345678A'), 'Recursos Humanos');
INSERT INTO Administratiu (Id, Area) VALUES ((SELECT Id FROM Personal WHERE DNI = '87654321B'), 'Finanzas');
INSERT INTO Administratiu (Id, Area) VALUES ((SELECT Id FROM Personal WHERE DNI = '11223344C'), 'Administración General');
INSERT INTO Administratiu (Id, Area) VALUES ((SELECT Id FROM Personal WHERE DNI = '44332211D'), 'Enfermería');


-- Insertar Metge
INSERT INTO Metges (Id, Especialitat) VALUES ((SELECT Id FROM Personal WHERE DNI = '55555555E'), 'Neurología');
INSERT INTO Metges (Id, Especialitat) VALUES ((SELECT Id FROM Personal WHERE DNI = '99999999I'), 'Pediatría');
INSERT INTO Metges (Id, Especialitat) VALUES ((SELECT Id FROM Personal WHERE DNI = '11223344C'), 'Cardiología');

-- Insertar Enfermer
INSERT INTO Enfermers (Id, Especialitat) VALUES ((SELECT Id FROM Personal WHERE DNI = '66666666F'), 'Cuidados Intensivos');
INSERT INTO Enfermers (Id, Especialitat) VALUES ((SELECT Id FROM Personal WHERE DNI = '10101010J'), 'Urología');
INSERT INTO Enfermers (Id, Especialitat) VALUES ((SELECT Id FROM Personal WHERE DNI = '44332211D'), 'Cuidados Intensivos');

-- Insertar AdministradorSistema
INSERT INTO AdministradorSistema (Id, Prioridad) VALUES ((SELECT Id FROM Personal WHERE DNI = '77777777G'), 'Maxima');
INSERT INTO AdministradorSistema (Id, Prioridad) VALUES ((SELECT Id FROM Personal WHERE DNI = '88888888H'), 'Neutral');


-- Insertar pacientes
INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('60391441L', 'UCUC0900322009', 'Itachi', 'Uchiha', '', 'Femenino', '600654321', 'España', 'itachi.lopez@hospital.com', '1990-03-22', 'alta');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('16484981F', 'UZHO0781105004', 'Naruto', 'Uzumaki', 'Hokage', 'Masculino', '600112233', 'España', 'naruto.uzumaki@hospital.com', '1978-11-05', 'baja');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('21424698Z', 'HAHA0820630003', 'Sakura', 'Haruno', '', 'Femenino', '600445566', 'España', 'sakura.haruno@hospital.com', '1982-06-30', 'alta');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('83787211M', 'HASE0950912005', 'Kakashi', 'Hatake', 'Sensei', 'Masculino', '600556677', 'Francia', 'kakashi.hatake@hospital.com', '1995-09-12', 'baja');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('33197100G', 'HYHY0880228002', 'Hinata', 'Hyuuga', '', 'Femenino', '600667788', 'Andorra', 'hinata.hyuuga@hospital.com', '1988-02-28', 'baja');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('59564083V', 'UCUC0751219006', 'Sasuke', 'Uchiha', 'Avenger', 'Masculino', '600778899', 'Francia', 'sasuke.uchiha@hospital.com', '1975-12-19', 'alta');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('07495694V', 'YAYA0920408007', 'Ino', 'Yamanaka', '', 'Femenino', '600889900', 'Andorra', 'ino.yamanaka@hospital.com', '1992-04-08', 'alta');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('98454420E', 'NANA0831025003', 'Shikamaru', 'Nara', 'Genius', 'Masculino', '600990011', 'Francia', 'shikamaru.nara@hospital.com', '1983-10-25', 'baja');

INSERT INTO Pacients (DNI, NumSS, Nom, Cognom1, Cognom2, Sexe, Telefono, Nacionalidad, Email, BirthDay, Estado) 
VALUES ('23219588F', 'KUKU0980114002', 'Tenten', 'Kunai', 'Master', 'Femenino', '600101112', 'España', 'tenten.kunai@hospital.com', '1998-01-14', 'baja');


-- Insertar entitats
INSERT INTO Entitats(Tablas) VALUES ('Llit');
INSERT INTO Entitats(Tablas) VALUES ('Habitació');
INSERT INTO Entitats(Tablas) VALUES ('Planta');
INSERT INTO Entitats(Tablas) VALUES ('Ingrés');
INSERT INTO Entitats(Tablas) VALUES ('Episodi Medic');
INSERT INTO Entitats(Tablas) VALUES ('Pruebas Diagnosticas');
INSERT INTO Entitats(Tablas) VALUES ('Pacient');
INSERT INTO Entitats(Tablas)  VALUES('Cita');

-- Episodis medics
INSERT INTO EpisodisMedics (DataObertura, DataTancament, Motivo, Urgencia, Recepta, Estat, PacientId, MetgeId) VALUES ('2024-11-05', NULL, 'Dolor abdominal', 5, 'Ibuprofeno 400mg', 'Actiu', 6, 3);
INSERT INTO EpisodisMedics (DataObertura, DataTancament, Motivo, Urgencia, Recepta, Estat, PacientId, MetgeId) VALUES ('2024-11-01', NULL, 'Fiebre alta', 3, NULL, 'Actiu', 2, 3);

INSERT INTO EpisodisMedics (DataObertura, DataTancament, Motivo, Urgencia, Recepta, Estat, PacientId, MetgeId) 
VALUES ('2024-09-15', '2024-09-20', 'Dolores varios', 1, 'Paracetamol 1000mg', 'Tancat', 7, 9);

INSERT INTO EpisodisMedics (DataObertura, DataTancament, Motivo, Urgencia, Recepta, Estat, PacientId, MetgeId) 
VALUES ('2024-09-16', '2024-09-22', 'Dolor intenso', 1, 'tiritas', 'En curs', 7, 9);

-- Ingressos 
INSERT INTO Ingressos (DataEntrada, DataSortida, EpisodiMedicId, LlitId) VALUES ('2024-11-01', NULL, 2, 1);

-- Pruebas diagnosticas
INSERT INTO PruebasDiagnosticas ( MetgeId, EnfermerId, EpisodiMedicId, Dolencia, Pruebas,Resultados, Correcta ) 
VALUES ( 3, 4, 3, 'Dolor en zona abdomen','Radiografia abdomen','abdomen dañado',1);

INSERT INTO PruebasDiagnosticas ( MetgeId, EnfermerId, EpisodiMedicId, Dolencia, Pruebas,Resultados, Correcta ) 
VALUES ( 3, 4, 3, 'Dolor de narizota','Radiografia nariz','nariz dañada',1);

INSERT INTO PruebasDiagnosticas ( MetgeId, EnfermerId, EpisodiMedicId, Dolencia, Pruebas,Resultados, Correcta ) 
VALUES ( 3, 4, 4, 'Dolor de alma','Radiografia alma','alma dañada',1);

INSERT INTO PruebasDiagnosticas ( MetgeId, EnfermerId, EpisodiMedicId, Dolencia, Pruebas,Resultados, Correcta ) 
VALUES ( 3, 4, 4, 'Dolor de pie','Radiografia pie','pie dañado',2);

INSERT INTO PruebasDiagnosticas ( MetgeId, EnfermerId, EpisodiMedicId, Dolencia, Pruebas,Resultados, Correcta ) 
VALUES ( 3, 4, 4, 'Fiebre','Toma de temperatura','fiebre',2);

-- citas
INSERT INTO Cita (Metge, Pacient, Episodi, Motiu, DataCita) VALUES ('55555555E', '98454420E', 2, 'dolor de narizota', '2024-11-01' );

-- Permis
INSERT INTO Permisos (Accio) VALUES ('C');
INSERT INTO Permisos (Accio) VALUES ('R');
INSERT INTO Permisos (Accio) VALUES ('U');
INSERT INTO Permisos (Accio) VALUES ('D');
INSERT INTO Permisos (Accio) VALUES ('CR');
INSERT INTO Permisos (Accio) VALUES ('CU');
INSERT INTO Permisos (Accio) VALUES ('CD');
INSERT INTO Permisos (Accio) VALUES ('RU');
INSERT INTO Permisos (Accio) VALUES ('RD');
INSERT INTO Permisos (Accio) VALUES ('UD');
INSERT INTO Permisos (Accio) VALUES ('CRU');
INSERT INTO Permisos (Accio) VALUES ('CRD');
INSERT INTO Permisos (Accio) VALUES ('CUD');
INSERT INTO Permisos (Accio) VALUES ('RUD');
INSERT INTO Permisos (Accio) VALUES ('CRUD');

-- Rol Permis Entitat
-- Inserts para el rol "Metge"
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Metge', 'C', 'Llit');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Metge', 'R', 'Habitació');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Metge', 'U', 'Planta');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Metge', 'D', 'Ingrés');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Metge', 'CR', 'Episodi Medic');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Metge', 'CRUD', 'Pacient');

-- Inserts para el rol "Administratiu"
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administratiu', 'C', 'Llit');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administratiu', 'R', 'Habitació');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administratiu', 'U', 'Planta');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administratiu', 'D', 'Ingrés');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administratiu', 'CR', 'Episodi Medic');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administratiu', 'CRUD', 'Pacient');

-- Inserts para el rol "Enfermer"
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Enfermer', 'C', 'Llit');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Enfermer', 'R', 'Habitació');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Enfermer', 'U', 'Planta');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Enfermer', 'D', 'Ingrés');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Enfermer', 'CR', 'Episodi Medic');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Enfermer', 'CRUD', 'Pacient');

-- Inserts para el rol "Administrador del Sistema"
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administrador del Sistema', 'C', 'Llit');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administrador del Sistema', 'R', 'Habitació');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administrador del Sistema', 'U', 'Planta');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administrador del Sistema', 'D', 'Ingrés');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administrador del Sistema', 'CR', 'Episodi Medic');
INSERT INTO RolPermisEntitats (RolId, PermisId, EntitatId) VALUES ('Administrador del Sistema', 'CRUD', 'Pacient');
