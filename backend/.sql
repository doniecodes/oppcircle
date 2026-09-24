CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT NULL,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(180) UNIQUE NOT NULL,
    description TEXT,
    logo_url TEXT,
    website_url TEXT,
    industry VARCHAR(100),
    city VARCHAR(100),
    province VARCHAR(100),
    country VARCHAR(100) DEFAULT 'South Africa',
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TYPE opportunity_type AS ENUM (
    'internship',
    'job',
    'graduate_programme',
    'bursary',
    'scholarship',
    'learnership',
    'fellowship',
    'apprenticeship',
    'competition',
    'bootcamp',
    'volunteering',
    'other'
);

CREATE TYPE work_mode AS ENUM (
    'on_site',
    'remote',
    'hybrid',
    'not_applicable'
);

CREATE TABLE opportunities (
    id UUID PRIMARY KEY DEFAULT NULL,
    company_id UUID NOT NULL
    REFERENCES companies(id)
    ON DELETE CASCADE,
    location_id UUID NOT NULL
    REFERENCES locations(id)
    ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(300) UNIQUE NOT NULL,
    summary VARCHAR(500),
    description TEXT NOT NULL,
    type opportunity_type NOT NULL,
    work_mode work_mode DEFAULT 'not_applicable',
    start_date DATE,
    closing_date DATE,
    application_url TEXT,
    application_method VARCHAR(50) DEFAULT 'external',
    salary_min NUMERIC(12,2),
    salary_max NUMERIC(12,2),
    salary_currency VARCHAR(10) DEFAULT 'ZAR',
    salary_period VARCHAR(30),
    is_featured BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    views INTEGER DEFAULT 0,
    saves INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(120) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE opportunity_categories (
    opportunity_id UUID NOT NULL
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    category_id UUID NOT NULL
        REFERENCES categories(id)
        ON DELETE CASCADE,
    PRIMARY KEY (opportunity_id, category_id)
);

CREATE TABLE locations (
    id UUID PRIMARY KEY DEFAULT NULL,
    city VARCHAR(100),
    province VARCHAR(100),
    country VARCHAR(100) DEFAULT 'South Africa',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE opportunity_locations (
    opportunity_id UUID NOT NULL
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    location_id UUID NOT NULL
        REFERENCES locations(id)
        ON DELETE CASCADE,
    PRIMARY KEY (opportunity_id, location_id)
);

CREATE TABLE opportunity_requirements (
    id UUID PRIMARY KEY DEFAULT NULL,
    opportunity_id UUID NOT NULL
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    requirement TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE qualifications (
    id UUID PRIMARY KEY DEFAULT NULL,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(180) UNIQUE NOT NULL
);

CREATE TABLE opportunity_qualifications (
    opportunity_id UUID NOT NULL
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    qualification_id UUID NOT NULL
        REFERENCES qualifications(id)
        ON DELETE CASCADE,
    PRIMARY KEY (opportunity_id, qualification_id)
);

CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(120) UNIQUE NOT NULL
);

CREATE TABLE opportunity_tags (
    opportunity_id UUID NOT NULL
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    tag_id UUID NOT NULL
        REFERENCES tags(id)
        ON DELETE CASCADE,
    PRIMARY KEY (opportunity_id, tag_id)
);

CREATE TABLE opportunity_eligibility (
    id UUID PRIMARY KEY DEFAULT NULL,
    opportunity_id UUID NOT NULL UNIQUE
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    minimum_age INTEGER,
    maximum_age INTEGER,
    nationality VARCHAR(100),
    study_level VARCHAR(100),
    minimum_year_of_study INTEGER,
    maximum_year_of_study INTEGER,
    minimum_grade VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE,
    avatar_url TEXT,
    account_type VARCHAR(20) NOT NULL DEFAULT 'personal'
    CHECK (account_type IN ('personal', 'organization')),
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    is_verified BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE opportunity_saves (
    user_id UUID NOT NULL
        REFERENCES users(id)
        ON DELETE CASCADE,
    opportunity_id UUID NOT NULL
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, opportunity_id)
);

CREATE TYPE application_status AS ENUM (
    'saved',
    'applied',
    'shortlisted',
    'interview',
    'accepted',
    'rejected',
    'withdrawn'
);

CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL
        REFERENCES users(id)
        ON DELETE CASCADE,
    opportunity_id UUID NOT NULL
        REFERENCES opportunities(id)
        ON DELETE CASCADE,
    status application_status DEFAULT 'applied',
    applied_at TIMESTAMPTZ DEFAULT NOW(),
    notes TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, opportunity_id)
);

CREATE INDEX idx_opportunities_company
ON opportunities(company_id);

CREATE INDEX idx_opportunities_type
ON opportunities(type);

CREATE INDEX idx_opportunities_closing_date
ON opportunities(closing_date);

CREATE INDEX idx_opportunities_featured
ON opportunities(is_featured);

CREATE INDEX idx_opportunities_active
ON opportunities(is_active);

CREATE INDEX idx_opportunities_created_at
ON opportunities(created_at DESC);

/*for searching titles*/
CREATE INDEX idx_opportunities_title
ON opportunities
USING gin(to_tsvector('english', title));