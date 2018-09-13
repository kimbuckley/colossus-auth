import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "colossus.settings")
os.environ.setdefault("DJANGO_CONFIGURATION", "Production")

from configurations.wsgi import get_wsgi_application  # noqa
application = get_wsgi_application()
