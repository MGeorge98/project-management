Va trebui sa-ti faci un SLICE pentru actiuni ce tin de UI:
- manipulare MODAL
    - open
    - selectedData
    - mode ( "edit" / "create" )
    - type ( "person" / "project" )

    - setSelectedData
    - setModalState


    Din personList / projectList, atunci cand vei selecta unul dintre carduri (personaa/proiect) vei face apel catre 
    uiSLICE la functia care iti va deschide modala, vei pasa catre modal datele cardului pe care l-ai selectat si 
    vei seta state modal in OPEN si "EDIT"

    Din personsList / projectList atunci cand vei apasa pe butonul add/create vei face apel catre uiSLICE la functia
    care iti va deschide modala, vei setat state modal in OPEN si mode in "CREATE"


    Vei avea o singura componenta de modal care isi va lua datele din uiSLICE si in functie de ce date are va randa 
    diferite continuturi ( create project / edit project / create person / edit person) in fucntie de     
    - open
    - selectedData
    - mode ( "edit" / "create" )
    - type ( "person" / "project" )


ACUM FOARTE IMPORTANT!!!!

Ce se randeaza pe ecran ca si pagina va sta in directorul VIEWS
Fiecare componenta in parte va fi localizata intr-un director ( NumeComponenta ) si va avea fisier .js si .css IN DIRECTOR

ui:"{"modalProps":{"open":false,"mode":"create","type":"person"}}"
ui:"{"modalProps":{"open":true}}"