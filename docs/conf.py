from okchain1.theme.rtd.conf.okchain_docs import *

# 支持md格式
from recommonmark.parser import CommonMarkParser
source_parsers = {
    '.md': CommonMarkParser,
}
source_suffix = ['.rst', '.md']
# source_suffix = '.rst'
site_url = 'https://okexchain-docs.readthedocs.io/en/latest/'

exclude_patterns = ['out/**', 'tmp/**', 'eggs/**', 'requirements.txt', 'README.rst']

extensions = [
    'crate.sphinx.csv',
    'sphinx_sitemap',
    'sphinx_markdown_tables',
]

# crate.theme sets html_favicon to favicon.png which causes a warning because
# it should be a .ico and in addition there is no favicon.png in this project
# so it can't find the file
html_favicon = None
