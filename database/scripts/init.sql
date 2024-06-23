-- ============================================================
--   Nom de la base   :  MANAGAIR_FLIGHTS
--   Nom de SGBD      :  MySQL
--   Date de création :  23/06/2024
-- ============================================================

SET NAMES 'utf8mb4';

use managair_flights

-- Supprimer la table vol si elle existe déjà
DROP TABLE IF EXISTS vol;
DROP TABLE IF EXISTS avion;
DROP TABLE IF EXISTS pilote;

-- ============================================================
--   Table : PILOTE
-- ============================================================
CREATE TABLE pilote (
    numpilote INT NOT NULL,
    nompilote VARCHAR(20),
    adresse VARCHAR(20),
    PRIMARY KEY (numpilote)
);

-- ============================================================
--   Table : AVION
-- ============================================================
CREATE TABLE avion (
    numavion INT NOT NULL,
    nomavion VARCHAR(20),
    capacite INT,
    localisation VARCHAR(20) DEFAULT 'Paris' NOT NULL,
    PRIMARY KEY (numavion),
    CHECK (capacite IN (140, 180, 200, 250, 300, 320, 360, 380, 450, 460))
);

-- ============================================================
--   Table : VOL
-- ============================================================
CREATE TABLE vol (
    numvol VARCHAR(6) NOT NULL,
    numpilote INT NOT NULL,
    numavion INT NOT NULL,
    villedep VARCHAR(20),
    villearr VARCHAR(20),
    heuredep VARCHAR(5),
    heurearr VARCHAR(5),
    PRIMARY KEY (numvol),
    FOREIGN KEY (numpilote) REFERENCES pilote(numpilote),
    FOREIGN KEY (numavion) REFERENCES avion(numavion)
);


-- ============================================================
--   Index : VOL_FK1
-- ============================================================
CREATE INDEX VOL_FK1 ON vol (numavion);

-- ============================================================
--   Index : VOL_FK2
-- ============================================================
CREATE INDEX VOL_FK2 ON vol (numpilote);


-- *** occurences de pilote ***

insert into pilote values
     (1,'Ader Clément        ','Paris');
insert into pilote values
     (2,'Chanute             ','Nice');
insert into pilote values
     (3,'Lilienthal          ','Mulhouse');
insert into pilote values
     (4,'Blériot Louis       ','Paris');
insert into pilote values
     (5,'Lindbergh Charles   ','New-York');
insert into pilote values
     (6,'Mermoz Jean         ','Paris');
insert into pilote values
     (7,'Fabre               ','Paris');
insert into pilote values
     (8,'Farman Henri        ','Londres');
insert into pilote values
     (9,'Wright              ','Londres');
insert into pilote values
     (10,'Garros Roland      ','Nice');
insert into pilote values
     (11,'Santos Dumont       ','Rio-de-Janeiro');
insert into pilote values
     (12,'Voisin Charles      ','Luxembourg');
insert into pilote values
     (13,'Saint Exupéry       ','Marseille');
insert into pilote values
     (14,'Boucher Héléne      ','Paris');
insert into pilote values
     (15,'Montgolfier         ','Paris');

-- *** occurences d'avion ***

insert into avion values
     (1,'Airbus A300         ',200,'Paris');
insert into avion values
     (2,'Airbus A300         ',200,'Paris');
insert into avion values
     (3,'Airbus A310         ',250,'Paris');
insert into avion values
     (4,'Airbus A320         ',300,'Paris');
insert into avion values
     (5,'Airbus A330         ',380,'Paris');
insert into avion values
     (6,'Airbus A340         ',450,'Paris');
insert into avion values
     (7,'Airbus A320         ',300,'Mulhouse');
insert into avion values
     (8,'Caravelle           ',180,'Strasbourg');
insert into avion values
     (9,'Caravelle           ',180,'Nice');
insert into avion values
     (10,'Concorde            ',140,'Paris');
insert into avion values
     (11,'Concorde            ',140,'Londres');
insert into avion values
     (12,'Concorde            ',140,'Paris');
insert into avion values
     (13,'Boeing 707          ',320,'Luxembourg');
insert into avion values
     (14,'Boeing 707          ',320,'Nice');
insert into avion values
     (15,'Boeing 717          ',360,'Paris');
insert into avion values
     (16,'Boeing 717          ',360,'Montréal');
insert into avion values
     (17,'Boeing 747          ',460,'Montréal');
insert into avion values
     (18,'Boeing 747          ',460,'Luxembourg');
insert into avion values
     (19,'Boeing 747          ',460,'Mulhouse');
insert into avion values
     (20,'Boeing 777          ',460,'Luxembourg');
insert into avion values
     (21,'DC 9                ',140,'Mulhouse');
insert into avion values
     (22,'Concorde            ',140,'Londres');

-- *** occurences de vol ***

insert into vol values
     ('AF0001',1,1,
      'Paris',
      'Johannesbourg',
      '06:00',
      '13:31');
insert into vol values
     ('AG0002',1,2,
      'Paris',
      'Alger',
      '06:45',
      '08:45');
insert into vol values
     ('AG0003',1,3,
      'Marseille',
      'Alger',
      '09:20',
      '10:35');
insert into vol values
     ('AG0004',1,4,
      'Nice',
      'Alger',
      '16:10',
      '17:45');
insert into vol values
     ('GB0005',1,5,
      'Paris',
      'Londres',
      '12:15',
      '13:55');
insert into vol values
     ('GB0006',1,6,
      'Lyon',
      'Londres',
      '10:15',
      '11:55');
insert into vol values
     ('GB0007',1,7,
      'Strasbourg',
      'Londres',
      '07:40',
      '09:00');
insert into vol values
     ('GB0008',1,8,
      'Mulhouse',
      'Londres',
      '06:20',
      '07:50');
insert into vol values
     ('AN0009',1,9,
      'Paris',
      'Fort-de-France',
      '14:25',
      '18:55');
insert into vol values
     ('AN0010',1,10,
      'Paris',
      'Pointe-a-Pitre',
      '11:10',
      '15:55');
insert into vol values
     ('AN0011',1,11,
      'Paris',
      'Saint-Martin',
      '12:05',
      '17:25');
insert into vol values
     ('AR0012',1,12,
      'Paris',
      'Buenos-Aires',
      '15:10',
      '22:15');
insert into vol values
     ('AU0013',1,13,
      'Paris',
      'Sydney',
      '04:00',
      '12:30');
insert into vol values
     ('AU0014',1,14,
      'Paris',
      'Melbourne',
      '12:00',
      '20:40');
insert into vol values
     ('AU0015',1,15,
      'Paris',
      'Perth',
      '08:40',
      '18:00');
insert into vol values
     ('BE0016',1,16,
      'Paris',
      'Cotonou',
      '05:10',
      '10:00');
insert into vol values
     ('BE0017',1,17,
      'Luxembourg',
      'Cotonou',
      '09:30',
      '12:15');
insert into vol values
     ('BE0018',1,18,
      'Bordeaux',
      'Cotonou',
      '18:00',
      '23:45');
insert into vol values
     ('BRE019',1,19,
      'Paris',
      'Rio-de-Janeiro',
      '07:25',
      '14:10');
insert into vol values
     ('BRE020',1,20,
      'Paris',
      'Sao-Paulo',
      '13:20',
      '19:20');
insert into vol values
     ('BRE021',2,1,
      'Strasbourg',
      'Rio-de-Janeiro',
      '06:30',
      '14:45');
insert into vol values
     ('BU0022',2,4,
      'Paris',
      'Varna',
      '13:15',
      '15:45');
insert into vol values
     ('CA0023',3,8,
      'Paris',
      'Douala',
      '07:50',
      '12:30');
insert into vol values
     ('CA0024',4,12,
      'Lyon',
      'Douala',
      '12:30',
      '18:00');
insert into vol values
     ('QUE025',5,16,
      'Paris',
      'Montréal',
      '09:00',
      '13:30');
insert into vol values
     ('QUE026',6,20,
      'Brest',
      'Montréal',
      '13:30',
      '19:00');
insert into vol values
     ('QUE027',7,2,
      'Nice',
      'Montréal',
      '10:20',
      '15:15');
insert into vol values
     ('CAN028',8,3,
      'Paris',
      'Toronto',
      '00:30',
      '06:00');
insert into vol values
     ('CAN029',9,5,
      'Paris',
      'Vancouver',
      '04:45',
      '09:15');
insert into vol values
     ('CAN030',10,9,
      'Paris',
      'Calgary',
      '16:25',
      '21:04');
insert into vol values
     ('CAN031',11,13,
      'Mulhouse',
      'Montréal',
      '09:10',
      '13:35');
insert into vol values
     ('CHI032',12,17,
      'Paris',
      'Pékin',
      '12:00',
      '18:30');
insert into vol values
     ('CHI033',13,6,
      'Paris',
      'Shanghai',
      '09:00',
      '15:00');
insert into vol values
     ('CHY034',14,10,
      'Paris',
      'Larnaca',
      '18:20',
      '21:00');
insert into vol values
     ('COT035',8,14,
      'Paris',
      'Abidjan',
      '15:00',
      '19:00');
insert into vol values
     ('CRE036',9,18,
      'Paris',
      'Heraklion',
      '07:30',
      '09:00');
insert into vol values
     ('CRE037',10,7,
      'Mulhouse',
      'Heraklion',
      '16:31',
      '18:00');
insert into vol values
     ('CUB038',11,11,
      'Paris',
      'La Havane',
      '04:00',
      '09:00');
insert into vol values
     ('CUB039',12,15,
      'Fort-de-France',
      'La Havane',
      '19:10',
      '20:20');
insert into vol values
     ('ECO040',3,19,
      'Paris',
      'Edimbourg',
      '15:00',
      '17:10');
insert into vol values
     ('EGY041',4,1,
      'Paris',
      'Le Caire',
      '11:00',
      '14:20');
insert into vol values
     ('EGY042',5,2,
      'Paris',
      'Louxor',
      '09:45',
      '12:40');
insert into vol values
     ('EQU043',6,3,
      'Paris',
      'Quito',
      '12:30',
      '20:00');
insert into vol values
     ('ESP044',7,4,
      'Paris',
      'Malaga',
      '05:00',
      '06:20');
insert into vol values
     ('ESP045',8,5,
      'Nice',
      'Malaga',
      '18:00',
      '19:00');
insert into vol values
     ('ESP046',9,6,
      'Marseille',
      'Malaga',
      '10:00',
      '11:00');
insert into vol values
     ('ESP047',10,7,
      'Paris',
      'Palma de Majorque',
      '06:30',
      '08:45');
insert into vol values
     ('ESP048',11,8,
      'Mulhouse',
      'Palma de Majorque',
      '12:25',
      '14:55');
insert into vol values
     ('ESP049',12,9,
      'Strasbourg',
      'Palma de Majorque',
      '15:00',
      '17:00');
insert into vol values
     ('ESP050',8,10,
      'Paris',
      'Ibiza',
      '11:00',
      '13:00');
insert into vol values
     ('USA050',9,11,
      'Paris',
      'New-York',
      '06:00',
      '10:00');
insert into vol values
     ('IRL051',10,12,
      'Paris',
      'Dublin',
      '08:00',
      '10:00');
insert into vol values
     ('GB0052',8,5,
      'Paris',
      'Londres',
      '14:00',
      '15:00');
insert into vol values
     ('GB0053',4,5,
      'Londres',
      'Mulhouse',
      '08:00',
      '10:10');
