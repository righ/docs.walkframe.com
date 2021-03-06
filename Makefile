# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= ./venv/bin/sphinx-build
SOURCEDIR     = source
BUILDDIR      = build
DOCSDIR       = docs

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: install
install:
	python -m venv venv || true
	./venv/bin/pip install -r requirements.txt

.PHONY: open
open:
	open build/html/index.html

.PHONY: watch
watch:
	./venv/bin/sphinx-autobuild "$(SOURCEDIR)" "$(BUILDDIR)" --port=4184

publish:
	@rm -rf "$(DOCSDIR)"
	@make html
	@cp -r "$(BUILDDIR)/html" "$(DOCSDIR)"
	@cp CNAME "$(DOCSDIR)/CNAME"
	@touch docs/.nojekyll
	@git add docs
	@git commit -m 'update docs'
	@git push origin main

.PHONY: create-react-app
create-react-app:
	read -p "project name: " project; \
	@npx create-react-app source/products/examples/$$project --template typescript
