import re

def is_email(email:str):
    """ 
        Sumary:
            Verificar si tiene un formato de email
        
        Args:
            email (str): instancia de Database 
        
        Returns:
            True si el formato es correcto, caso contrario False
    """
    # Patrón de expresión regular para validar correos electrónicos
    patron = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(patron, email.lower())

def is_valid(s:str):
    """ 
        Sumary:
            Verificar que el str recibido no sea un string vacio y que su longitud no sea menor a 5
        
        Args:
            email (str): instancia de Database 
        
        Returns:
            True si el formato es correcto, caso contrario False
    """
    if s == '' or len(s) < 5:
        return False
    else: return True