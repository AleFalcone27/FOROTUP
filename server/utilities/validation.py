import re

def validate_email(email:str):
    """ Verifica que el str recibo tenga el formato email 

    Args:
        email (str): _description_
        
    Devuelve: True si cumple con el formato, caso contrario
    """
    regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    pattern = re.compile(regex)
    
    if re.match(pattern, email):
        return True
    else:
        return False
    
def validate_username(name:str):
    """ Verifica que el string recibo cumpla con el formato de nombre adecuado 

    Args:
        email (str): _description_
        
    Devuelve: True si cumple con el formato, caso contrario
    """
    if len(name) > 6:
        return True
    else: return False
